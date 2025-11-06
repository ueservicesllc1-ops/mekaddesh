const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');

// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://mekaddesh.shop',
  credentials: true,
}));
app.use(express.json());

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Solo se permiten imágenes (jpeg, jpg, png, gif, webp)'));
    }
  },
});

// Configure Backblaze B2 S3-compatible client
// Backblaze B2 is S3-compatible and requires:
// - Signature V4 (default in AWS SDK v3)
// - Force path style for bucket access
// - Correct endpoint format: s3.<region>.backblazeb2.com
const region = process.env.B2_REGION || 'us-east-005';
const s3Client = new S3Client({
  endpoint: `https://s3.${region}.backblazeb2.com`,
  region: region,
  forcePathStyle: true, // Required for Backblaze B2
  credentials: {
    accessKeyId: process.env.B2_APPLICATION_KEY_ID,
    secretAccessKey: process.env.B2_APPLICATION_KEY,
  },
  // AWS SDK v3 uses Signature V4 by default, which is what B2 requires
});

// Upload endpoint
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    console.log('=== Upload Request Received ===');
    console.log('File:', req.file ? req.file.originalname : 'No file');
    console.log('B2_BUCKET_NAME:', process.env.B2_BUCKET_NAME);
    console.log('B2_BUCKET_ID:', process.env.B2_BUCKET_ID);
    console.log('B2_REGION:', process.env.B2_REGION);

    if (!req.file) {
      console.error('No file provided');
      return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
    }

    if (!process.env.B2_BUCKET_NAME || !process.env.B2_BUCKET_ID) {
      console.error('Missing B2 configuration');
      return res.status(500).json({ error: 'Configuración de B2 no encontrada' });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const extension = path.extname(req.file.originalname) || '.jpg';
    const filename = `products/${timestamp}-${randomString}${extension}`;

    console.log('Uploading to B2...');
    console.log('Filename:', filename);
    console.log('ContentType:', req.file.mimetype);
    console.log('File size:', req.file.size, 'bytes');

    // Upload to Backblaze B2
    // Note: Backblaze B2 doesn't support ACL parameter like S3
    const uploadParams = {
      Bucket: process.env.B2_BUCKET_NAME,
      Key: filename,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
      // B2 uses bucket-level permissions, not ACL
    };

    // PASO 1: Subir archivo a B2 y obtener la respuesta
    const command = new PutObjectCommand(uploadParams);
    const uploadResult = await s3Client.send(command);

    console.log('✅ File uploaded successfully to B2');
    console.log('B2 Upload Result:', {
      ETag: uploadResult.ETag,
      VersionId: uploadResult.VersionId,
      ServerSideEncryption: uploadResult.ServerSideEncryption,
      SSECustomerAlgorithm: uploadResult.SSECustomerAlgorithm,
    });

    // PASO 2: Obtener información del bucket para construir la URL pública
    const bucketId = process.env.B2_BUCKET_ID;
    const bucketName = process.env.B2_BUCKET_NAME;
    const region = process.env.B2_REGION || 'us-east-005';
    
    // Backblaze B2 puede usar diferentes formatos de URL:
    // 1. S3 Compatible con bucket name: https://{BUCKET_NAME}.s3.{REGION}.backblazeb2.com/{filename}
    // 2. S3 Compatible con bucket ID: https://f{BUCKET_ID}.s3.{REGION}.backblazeb2.com/{filename}
    // 3. Friendly URL: https://f000.backblazeb2.com/file/{bucket}/{filename}
    
    // Intentar primero con bucket name (más común para buckets públicos)
    let publicUrl = `https://${bucketName}.s3.${region}.backblazeb2.com/${filename}`;
    
    console.log('=== B2 Upload Complete ===');
    console.log('Bucket ID:', bucketId);
    console.log('Bucket Name:', bucketName);
    console.log('Region:', region);
    console.log('Filename:', filename);
    console.log('Generated Public URL:', publicUrl);
    console.log('ETag from B2:', uploadResult.ETag);

    // PASO 3: Devolver todos los datos para que el frontend guarde en Firestore
    res.json({
      success: true,
      url: publicUrl, // URL pública para usar en Firestore
      filename: filename,
      bucketId: bucketId,
      bucketName: bucketName,
      region: region,
      etag: uploadResult.ETag, // ETag de B2 para verificación
      uploadResult: {
        ETag: uploadResult.ETag,
        VersionId: uploadResult.VersionId,
      },
    });
  } catch (error) {
    console.error('❌ Error uploading file:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ 
      error: 'Error al subir la imagen',
      message: error.message,
      details: error.name
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS proxy ready for Backblaze B2 uploads`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

