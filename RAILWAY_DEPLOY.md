# Guía de Despliegue en Railway

## 📋 Configuración de Servicios

Railway necesita DOS servicios separados:

### 1. Servidor Proxy (Backend)

**Configuración:**
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `node index.js`
- **Port**: Railway asignará automáticamente (usa variable `PORT`)

**Variables de Entorno:**
```json
{
  "PORT": "3001",
  "B2_APPLICATION_KEY_ID": "005c2b526be0baa0000000021",
  "B2_APPLICATION_KEY": "K005rNLngTzaNkWUagZYdsaVzbLlwIA",
  "B2_BUCKET_NAME": "mekadesh",
  "B2_BUCKET_ID": "6c92eb35d2265b6e90ab0a1a",
  "B2_REGION": "us-east-005",
  "FRONTEND_URL": "https://mekaddesh.shop",
  "NODE_ENV": "production"
}
```

### 2. Frontend (React/Vite)

**Configuración:**
- **Root Directory**: `.` (raíz del proyecto)
- **Build Command**: `npm run build`
- **Start Command**: `npm run start` o `npm run preview -- --host 0.0.0.0 --port $PORT`
- **Port**: Railway asignará automáticamente

**Variables de Entorno:**
```json
{
  "VITE_API_URL": "https://[URL_DEL_SERVIDOR_PROXY]",
  "VITE_FIREBASE_API_KEY": "AIzaSyDbnYTdFHG5L_YQJ-39bzvKVSkmk37gppg",
  "VITE_FIREBASE_AUTH_DOMAIN": "mekade-a311d.firebaseapp.com",
  "VITE_FIREBASE_PROJECT_ID": "mekade-a311d",
  "VITE_FIREBASE_STORAGE_BUCKET": "mekade-a311d.firebasestorage.app",
  "VITE_FIREBASE_MESSAGING_SENDER_ID": "990121061879",
  "VITE_FIREBASE_APP_ID": "1:990121061879:web:d12c9d433e767d169f12f2",
  "NODE_ENV": "production"
}
```

## ⚠️ Importante

1. **URL del Servidor Proxy**: Después de desplegar el servidor proxy, Railway te dará una URL. Úsala en `VITE_API_URL` del frontend.

2. **CORS**: El servidor proxy está configurado para aceptar requests desde `https://mekaddesh.shop`.

3. **Dominio Personalizado**: Configura `mekaddesh.shop` en Railway para el servicio del frontend.

4. **Puertos**: Railway asigna puertos automáticamente usando la variable `PORT`. No necesitas especificarlos manualmente.

## 🔧 Archivos de Configuración

- `server/Procfile`: Comando de inicio para el servidor
- `Procfile`: Comando de inicio para el frontend
- `railway.json`: Configuración de Railway para el frontend
- `server/railway.json`: Configuración de Railway para el servidor

