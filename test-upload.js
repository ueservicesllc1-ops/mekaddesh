// Script de prueba para verificar la subida de imágenes a Backblaze B2
// Ejecutar con: node test-upload.js

const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

async function testUpload() {
  try {
    // Crear una imagen de prueba simple (1x1 pixel PNG)
    const testImageBuffer = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      'base64'
    );

    const formData = new FormData();
    formData.append('image', testImageBuffer, {
      filename: 'test.png',
      contentType: 'image/png',
    });

    console.log('Subiendo imagen de prueba...');
    const response = await fetch('http://localhost:3001/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Subida exitosa!');
      console.log('URL de la imagen:', result.url);
      console.log('Filename:', result.filename);
    } else {
      console.error('❌ Error:', result);
    }
  } catch (error) {
    console.error('❌ Error al probar subida:', error.message);
  }
}

testUpload();

