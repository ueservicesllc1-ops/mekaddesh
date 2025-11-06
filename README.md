# Mekaddesh - Tienda de Productos de Belleza

Una tienda en línea moderna y elegante para productos de belleza, diseñada con React, Vite, Tailwind CSS y Framer Motion.

## 🎨 Características

- ✨ Diseño moderno y elegante con colores blanco, rosa y dorado
- 🎭 Animaciones suaves con Framer Motion
- 🛒 Carrito de compras funcional
- 📱 Diseño responsive
- 🎯 Banner Hero con efectos visuales
- 💫 Efectos de hover y transiciones
- 🔥 Firebase Firestore para metadatos de productos
- ☁️ Backblaze B2 para almacenamiento de imágenes
- 🔐 Panel de administración

## 🚀 Instalación

### Frontend

1. Instala las dependencias:
```bash
npm install
```

2. Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_API_URL=http://localhost:3001
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### Backend (Servidor Proxy)

1. Ve a la carpeta `server`:
```bash
cd server
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la carpeta `server/`:
```env
B2_APPLICATION_KEY_ID=tu_application_key_id
B2_APPLICATION_KEY=tu_application_key
B2_BUCKET_NAME=tu_bucket_name
B2_BUCKET_ID=tu_bucket_id
B2_REGION=us-west-004
PORT=3001
```

4. Inicia el servidor:
```bash
npm start
```

Para más detalles sobre la configuración del servidor, ver [README_SERVER.md](./README_SERVER.md)

## 🛠️ Tecnologías Utilizadas

- **React** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **React Icons** - Iconos
- **Firebase Firestore** - Base de datos para productos
- **Backblaze B2** - Almacenamiento de imágenes (S3-compatible)
- **Express** - Servidor proxy para CORS

## 📦 Scripts Disponibles

### Frontend
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la build de producción
- `npm run preview` - Previsualiza la build de producción

### Backend
- `cd server && npm start` - Inicia el servidor proxy
- `cd server && npm run dev` - Inicia el servidor en modo desarrollo (con nodemon)

## 🎨 Paleta de Colores

- **Blanco**: Base y fondo
- **Rosa** (`mekadesh-rose`): Elementos principales
- **Dorado** (`mekadesh-gold`): Acentos y gradientes

## 📱 Secciones

- **Hero Banner**: Banner principal con animaciones
- **Productos**: Catálogo de productos con carrito
- **Sobre Nosotros**: Información de la marca
- **Contacto**: Formulario de contacto
- **Administración**: Panel para gestionar productos

## 🔧 Configuración de Firebase

Firebase ya está configurado con las credenciales proporcionadas. Los productos se guardan automáticamente en Firestore.

## ☁️ Configuración de Backblaze B2

Para subir imágenes de productos, necesitas configurar Backblaze B2. Ver [README_SERVER.md](./README_SERVER.md) para más detalles.

¡Disfruta tu nueva tienda en línea! 💖✨

