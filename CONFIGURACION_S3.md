# Configuración S3 para Backblaze B2

## ✅ Configuración Actual

El servidor está configurado para usar Backblaze B2 como almacenamiento compatible con S3.

### Características de la Configuración:

1. **Cliente S3**: Usa `@aws-sdk/client-s3` (AWS SDK v3)
2. **Endpoint**: `https://s3.<region>.backblazeb2.com`
3. **Force Path Style**: `true` (requerido para Backblaze B2)
4. **Signature**: V4 (por defecto en AWS SDK v3)
5. **Region**: `us-east-005` (configurable en `.env`)

### Variables de Entorno Requeridas:

```env
B2_APPLICATION_KEY_ID=tu_key_id
B2_APPLICATION_KEY=tu_application_key
B2_BUCKET_NAME=mekadesh
B2_BUCKET_ID=6c92eb35d2265b6e90ab0a1a
B2_REGION=us-east-005
```

### Formato de URL Pública:

Las URLs públicas de Backblaze B2 siguen el formato:
```
https://f{BUCKET_ID}.s3.{REGION}.backblazeb2.com/{filename}
```

Ejemplo:
```
https://f6c92eb35d2265b6e90ab0a1a.s3.us-east-005.backblazeb2.com/products/1234567890-abc123.jpg
```

## 🔍 Verificación

1. El bucket debe estar configurado como **público** en Backblaze B2
2. Las credenciales deben tener permisos para:
   - Listar buckets
   - Escribir archivos
   - Leer archivos

## 📝 Notas Importantes

- Backblaze B2 **NO soporta ACL** (Access Control Lists) como S3
- Los permisos se manejan a nivel de bucket
- El bucket debe ser público para que las URLs funcionen

