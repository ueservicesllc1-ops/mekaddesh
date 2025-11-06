# 🔒 Protección Desktop - Ediciones Móvil

## ⚠️ IMPORTANTE: Proteger Desktop al Editar Móvil

Cuando edites para **iPhone 16 / móvil**, usa **media queries** para que NO afecte desktop:

### ✅ FORMA CORRECTA (Solo afecta móvil):

```jsx
// ✅ CORRECTO - Solo afecta móvil
<div className="text-base md:text-lg">
  Texto
</div>

// ✅ CORRECTO - Solo afecta móvil
<div className="p-4 md:p-8">
  Contenido
</div>
```

### ❌ FORMA INCORRECTA (Afecta todo):

```jsx
// ❌ INCORRECTO - Afecta desktop también
<div className="text-base">
  Texto
</div>

// ❌ INCORRECTO - Afecta desktop también  
<div className="p-4">
  Contenido
</div>
```

## 📋 Reglas para Editar Móvil:

1. **Siempre usar breakpoints de Tailwind**: `md:`, `lg:`, `xl:`
2. **Mobile First**: Define primero móvil, luego desktop con `md:`
3. **Ejemplo correcto**:
   ```jsx
   className="text-sm md:text-xl"  // Pequeño en móvil, grande en desktop
   className="p-4 md:p-8"          // Menos padding en móvil
   className="grid-cols-1 md:grid-cols-3"  // 1 columna móvil, 3 desktop
   ```

## 🎯 Breakpoints de Tailwind:

- **Móvil**: `< 768px` (default, sin prefijo)
- **Desktop**: `md: 768px+` (usa `md:` para desktop)
- **Large**: `lg: 1024px+`
- **XL**: `xl: 1280px+`

## 📱 Ejemplo de Estructura Correcta:

```jsx
<div className="
  text-base          // Móvil: texto base
  md:text-2xl       // Desktop: texto grande
  
  p-4                // Móvil: padding pequeño
  md:p-8             // Desktop: padding grande
  
  grid-cols-1        // Móvil: 1 columna
  md:grid-cols-3     // Desktop: 3 columnas
">
```

## 🚫 NO HACER:

- ❌ Cambiar valores por defecto sin `md:` (afecta desktop)
- ❌ Usar `!important` sin media query
- ❌ Modificar estilos globales sin considerar desktop

