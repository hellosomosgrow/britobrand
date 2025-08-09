# Brito Brand Web

## 🎯 Optimización de Imágenes

### ✨ Estrategias Implementadas

La aplicación ahora incluye **optimización avanzada de imágenes** para mejorar significativamente el performance sin perder calidad:

#### 🔄 **Lazy Loading Inteligente**

- ✅ **Intersection Observer**: Carga imágenes solo cuando están próximas a ser visibles
- ✅ **Pre-carga anticipada**: 50px antes de que la imagen sea visible
- ✅ **Placeholders animados**: Skeleton loading mientras cargan las imágenes
- ✅ **Transiciones suaves**: Opacity transitions para una experiencia fluida

#### 🎨 **Componentes Optimizados**

1. **LazyImage**: Componente principal para carga diferida
2. **OptimizedImage**: Maneja WebP y fallbacks automáticamente
3. **ImagePreloader**: Pre-carga imágenes críticas
4. **TestimonialCard**: Optimizado para avatar loading
5. **ProjectPreviewLargeCard**: Optimizado para grid de proyectos

#### ⚡ **Performance Features**

- **Carga diferida**: Solo carga imágenes cuando son necesarias
- **Pre-carga inteligente**: Imágenes críticas se cargan inmediatamente
- **Decodificación asíncrona**: No bloquea el render
- **Optimización de memoria**: Cleanup automático de observers
- **Error handling**: Fallbacks para imágenes que fallan

#### 🎯 **Configuración Avanzada**

```typescript
// Configuración de lazy loading
lazyLoading: {
  rootMargin: '50px 0px',  // Carga 50px antes
  threshold: 0.1,          // 10% visible
}

// Tipos de carga
- priority: true    // Carga inmediata (banners, hero images)
- priority: false   // Carga diferida (gallery, thumbnails)
```

#### 📊 **Beneficios de Performance**

- **Reducción de carga inicial**: Solo carga imágenes visibles
- **Mejor Core Web Vitals**: LCP, FID, CLS optimizados
- **Menor uso de ancho de banda**: Carga progresiva
- **Experiencia de usuario mejorada**: Transiciones suaves
- **SEO mejorado**: Mejor performance score

---

## 🎯 Navegación con Swipe (Mobile)

### ✨ Funcionalidad Implementada

La aplicación ahora incluye **navegación con gestos de swipe** exclusivamente para dispositivos móviles:

#### 🔄 **Cómo Funciona**

- **Swipe Izquierda** → Navega a la siguiente página
- **Swipe Derecha** → Navega a la página anterior

#### 📍 **Rutas Soportadas**

El orden de navegación es:

1. `Home` (`/`)
2. `Proyectos` (`/proyectos` y `/proyectos/:projectId`)
3. `Contacto` (`/contacto`)

#### ⚙️ **Configuración**

- **Distancia mínima**: 100px para activar el swipe
- **Tiempo máximo**: 300ms para completar el gesto
- **Distancia vertical máxima**: 150px para evitar conflictos con scroll
- **Indicador visual**: Se muestra por 2 segundos al cambiar de página

#### 🎨 **Indicador Visual**

Cuando cambias de página en mobile, aparece un indicador temporal en la parte inferior que dice:

```
← Swipe para navegar →
```

#### 🔧 **Detalles Técnicos**

- **Solo funciona en mobile**: Detecta automáticamente dispositivos móviles
- **No interfiere con scroll**: Solo se activa con movimientos horizontales claros
- **Performance optimizada**: Usa event listeners pasivos para mejor rendimiento
- **Responsive**: Se adapta automáticamente al tamaño de pantalla

#### 🚀 **Uso**

1. Abre la app en un dispositivo móvil
2. Desliza hacia la izquierda para ir a la siguiente página
3. Desliza hacia la derecha para ir a la página anterior
4. El indicador visual te ayudará a recordar la funcionalidad

---

## 🛠️ Tecnologías

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Vite
- Intersection Observer API
- WebP Support Detection

## 🎨 Características

- Diseño responsive
- Navegación con swipe (mobile)
- Optimización avanzada de imágenes
- Lazy loading inteligente
- Pre-carga de imágenes críticas
- Interfaz moderna y elegante
- Optimización para móviles
- Animaciones suaves
- Performance optimizado
- SEO friendly
