# Servidor Proxy para Backblaze B2

Este servidor proxy maneja las subidas de imágenes a Backblaze B2 para evitar problemas de CORS.

## Configuración

1. **Crea un archivo `.env` en la carpeta `server/`:**

```env
# Backblaze B2 Configuration
B2_APPLICATION_KEY_ID=tu_application_key_id
B2_APPLICATION_KEY=tu_application_key
B2_BUCKET_NAME=tu_bucket_name
B2_BUCKET_ID=tu_bucket_id
B2_REGION=us-west-004

# Server Configuration
PORT=3001
```

2. **Instala las dependencias del servidor:**

```bash
cd server
npm install
```

3. **Inicia el servidor:**

```bash
npm start
```

O en modo desarrollo:

```bash
npm run dev
```

## Cómo obtener las credenciales de Backblaze B2

1. Ve a tu cuenta de Backblaze B2
2. Crea un Bucket (si no tienes uno)
3. Crea una Application Key:
   - Ve a "App Keys" en tu cuenta
   - Crea una nueva key con permisos de lectura y escritura
   - Copia el `keyID` y `applicationKey`
4. Obtén el Bucket ID:
   - Ve a la configuración de tu bucket
   - Copia el "Bucket ID"

## Variables de Entorno

- `B2_APPLICATION_KEY_ID`: ID de tu Application Key
- `B2_APPLICATION_KEY`: Tu Application Key secreta
- `B2_BUCKET_NAME`: Nombre de tu bucket
- `B2_BUCKET_ID`: ID de tu bucket
- `B2_REGION`: Región de tu bucket (ej: us-west-004)
- `PORT`: Puerto del servidor (default: 3001)

## Endpoints

- `POST /api/upload`: Sube una imagen a Backblaze B2
- `GET /api/health`: Verifica el estado del servidor

