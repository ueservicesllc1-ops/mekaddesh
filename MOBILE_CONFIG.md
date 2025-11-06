# Configuración Móvil - iPhone 16

## 📱 Configuración Aplicada

### Viewport y Meta Tags
- **Viewport**: Configurado para iPhone 16 y dispositivos móviles
- **User Scalable**: Deshabilitado para evitar zoom accidental
- **Viewport Fit**: Cover para soportar notch del iPhone
- **Apple Web App**: Configurado para funcionar como app nativa

### Dimensiones iPhone 16
- **Ancho**: 393px (viewport width)
- **Alto**: 852px (viewport height)
- **Aspect Ratio**: ~0.46:1 (vertical)
- **Safe Area**: Respetar notch superior e indicador home inferior

### Diseño Responsive
- **Mobile First**: Diseño optimizado primero para móvil (393px)
- **Breakpoints**:
  - Mobile/iPhone 16: 0-393px (default)
  - Small Mobile: 394-767px
  - Tablet: md: 768px+
  - Desktop: lg: 1024px+
  - Large: xl: 1280px+

### Notas Importantes
- El diseño está optimizado para iPhone 16 (393x852px)
- Todas las ediciones móviles deben probarse en estas dimensiones
- Los cambios móviles NO afectan desktop (usar breakpoints `md:`)
- Respetar safe areas del iPhone (notch y home indicator)

