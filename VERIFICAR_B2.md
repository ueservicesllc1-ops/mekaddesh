# Verificación de Subida a Backblaze B2

## ✅ Estado del Servidor Proxy

El servidor proxy está corriendo en el puerto **3001**.

## 🔍 Cómo verificar si las fotos se suben correctamente:

1. **Revisa la consola del servidor** (donde ejecutaste `node index.js` en la carpeta `server/`)
   - Deberías ver logs como:
     - `=== Upload Request Received ===`
     - `Uploading to B2...`
     - `✅ File uploaded successfully to B2`
     - `Public URL: https://f...`

2. **Revisa la consola del navegador** (F12)
   - Busca mensajes de `uploadImage` y `Upload success!`

3. **Verifica en Backblaze B2 Console:**
   - Ve a: https://secure.backblaze.com/user_files.htm
   - Selecciona tu bucket `mekadesh`
   - Deberías ver archivos en la carpeta `products/`

## 🐛 Si hay problemas:

### Error: "Missing or insufficient permissions"
- Verifica que las credenciales en `server/.env` sean correctas
- Asegúrate de que el bucket sea **público** (Public bucket)

### Error: "Configuración de B2 no encontrada"
- Verifica que el archivo `server/.env` exista y tenga todas las variables:
  - `B2_APPLICATION_KEY_ID`
  - `B2_APPLICATION_KEY`
  - `B2_BUCKET_NAME`
  - `B2_BUCKET_ID`
  - `B2_REGION`

### Error: "Failed to upload"
- Verifica que el bucket esté configurado como **público** en Backblaze
- Revisa los logs del servidor para ver el error específico

## 📝 Logs del Servidor

Los logs ahora incluyen información detallada:
- Nombre del archivo
- Tamaño del archivo
- URL pública generada
- Errores detallados si ocurren

