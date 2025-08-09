# Brito Brand Web

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

## 🎨 Características

- Diseño responsive
- Navegación con swipe (mobile)
- Interfaz moderna y elegante
- Optimización para móviles
- Animaciones suaves
