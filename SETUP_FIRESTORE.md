# Configuración de Firestore - PASOS A SEGUIR

## 🔥 Configurar Reglas de Firestore

1. **Ve a Firebase Console:**
   - https://console.firebase.google.com/
   - Selecciona el proyecto: **mekade-a311d**

2. **Navega a Firestore Database:**
   - Menú lateral → Firestore Database
   - Pestaña "Rules"

3. **Copia y pega estas reglas:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Reglas para la colección de productos
    match /products/{productId} {
      // Permitir lectura a todos
      allow read: if true;
      
      // Permitir escritura a todos (para desarrollo)
      // ⚠️ En producción, deberías restringir esto con autenticación
      allow create: if true;
      allow update: if true;
      allow delete: if true;
    }
    
    // Denegar acceso a cualquier otra colección por defecto
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

4. **Publica las reglas:**
   - Haz clic en "Publish"
   - Espera a que se confirmen los cambios

## ✅ Verificación

Después de configurar las reglas, intenta crear un producto desde el panel de administración. Los errores de permisos deberían desaparecer.

