# Reglas de Firestore

Copia y pega estas reglas en Firebase Console:

1. Ve a Firebase Console: https://console.firebase.google.com/
2. Selecciona tu proyecto: mekade-a311d
3. Ve a Firestore Database
4. Haz clic en "Rules"
5. Reemplaza las reglas actuales con estas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Reglas para la colección de productos
    match /products/{productId} {
      // Permitir lectura a todos
      allow read: if true;
      
      // Permitir escritura a todos (en producción deberías restringir esto con autenticación)
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

6. Haz clic en "Publish" para guardar las reglas

