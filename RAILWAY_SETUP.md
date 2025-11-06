# Configuración de Variables de Entorno para Railway

## 📋 Variables para Railway

Copia y pega el siguiente JSON en Railway cuando configures las variables de entorno:

### Para el Servidor Proxy (Backend)

```json
{
  "PORT": "3001",
  "B2_APPLICATION_KEY_ID": "005c2b526be0baa0000000021",
  "B2_APPLICATION_KEY": "K005rNLngTzaNkWUagZYdsaVzbLlwIA",
  "B2_BUCKET_NAME": "mekadesh",
  "B2_BUCKET_ID": "6c92eb35d2265b6e90ab0a1a",
  "B2_REGION": "us-east-005",
  "NODE_ENV": "production"
}
```

### Para el Frontend (React/Vite)

```json
{
  "VITE_API_URL": "https://mekaddesh.shop",
  "NODE_ENV": "production"
}
```

## 🚀 Pasos para Configurar en Railway

### 1. Servidor Proxy (Backend)

1. En Railway, crea un nuevo servicio para el servidor proxy
2. Conecta el repositorio: `https://github.com/ueservicesllc1-ops/mekaddesh.git`
3. Configura el directorio raíz: `server`
4. Comando de inicio: `npm start`
5. Puerto: `3001`
6. Agrega las variables de entorno del servidor (arriba)

### 2. Frontend (React)

1. En Railway, crea un nuevo servicio para el frontend
2. Conecta el mismo repositorio
3. Configura el directorio raíz: `.` (raíz del proyecto)
4. Comando de build: `npm run build`
5. Comando de inicio: `npm run preview` o usa un servidor estático como `serve`
6. Puerto: `5173` (o el que Railway asigne)
7. Agrega las variables de entorno del frontend (arriba)

### 3. Configuración de Dominio

1. En Railway, ve a tu servicio del frontend
2. Configura el dominio personalizado: `mekaddesh.shop`
3. Railway asignará automáticamente un certificado SSL

### 4. Notas Importantes

- **CORS**: Asegúrate de que el servidor proxy permita requests desde `https://mekaddesh.shop`
- **Variables sensibles**: Las credenciales de B2 están en el JSON, pero Railway las maneja de forma segura
- **Firebase**: Las credenciales de Firebase están en el código (`src/firebase/config.js`), no necesitas variables adicionales

## 📝 Archivo JSON Completo

El archivo `railway-variables.json` contiene todas las variables en formato JSON para fácil importación.

