# 🔒 Configuración de reCAPTCHA v3

## 📋 Pasos para Configurar reCAPTCHA

### 1. 🎯 Crear Cuenta en Google reCAPTCHA

1. Ve a [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Crear"** para registrar un nuevo sitio

### 2. ⚙️ Configurar el Sitio

- **Etiqueta del sitio**: `Brito Brand Web`
- **Tipo de reCAPTCHA**: Selecciona **"reCAPTCHA v3"**
- **Dominios**: Agrega tu dominio (ej: `britobrand.com`, `localhost` para desarrollo)
- **Términos de servicio**: Acepta los términos
- Haz clic en **"Enviar"**

### 3. 🔑 Obtener las Claves

Después de crear el sitio, obtendrás:

- **Clave del sitio** (Site Key): `6Lc...` (pública, va en el frontend)
- **Clave secreta** (Secret Key): `6Lc...` (privada, va en el backend)

### 4. 🚀 Configurar el Proyecto

#### A. Actualizar la Clave del Sitio

1. Abre `src/config/recaptcha.ts`
2. Reemplaza `SITE_KEY` con tu clave real:

```typescript
export const RECAPTCHA_CONFIG = {
  SITE_KEY: '6LcTuTuClaveRealAqui', // ← Tu clave real
  // ... resto de la configuración
};
```

#### B. Actualizar el HTML

1. Abre `public/index.html`
2. Reemplaza `SITE_KEY` con tu clave real:

```html
<script src="https://www.google.com/recaptcha/api.js?render=6LcTuTuClaveRealAqui"></script>
```

### 5. 🔧 Configuración del Backend (Opcional)

Si tienes un backend, necesitarás validar el token:

```javascript
// Ejemplo en Node.js
const axios = require('axios');

async function verifyRecaptcha(token) {
  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: 'TU_CLAVE_SECRETA_AQUI',
        response: token,
      },
    }
  );

  const { success, score } = response.data;

  if (success && score >= 0.5) {
    // Usuario es humano, procesar formulario
    return true;
  } else {
    // Posible bot, rechazar
    return false;
  }
}
```

## 📊 Configuración de Score

reCAPTCHA v3 asigna un score de 0.0 a 1.0:

- **0.0**: Muy probable que sea un bot
- **1.0**: Muy probable que sea un humano

### Umbral Recomendado:

- **Desarrollo**: 0.3 (más permisivo)
- **Producción**: 0.5 (equilibrado)
- **Alta seguridad**: 0.7 (más estricto)

Puedes ajustar esto en `src/config/recaptcha.ts`:

```typescript
export const RECAPTCHA_CONFIG = {
  // ... otras configuraciones
  SCORE_THRESHOLD: 0.5, // ← Ajusta según tus necesidades
};
```

## 🧪 Pruebas

### Desarrollo Local:

1. Agrega `localhost` a los dominios permitidos
2. El formulario funcionará normalmente
3. Revisa la consola para ver el token generado

### Producción:

1. Agrega tu dominio real a los dominios permitidos
2. Prueba el formulario en producción
3. Monitorea los scores en Google reCAPTCHA Admin Console

## 🚨 Solución de Problemas

### Error: "reCAPTCHA no está cargado"

- Verifica que el script esté en el HTML
- Asegúrate de que la clave del sitio sea correcta
- Revisa que el dominio esté en la lista de dominios permitidos

### Error: "Clave del sitio inválida"

- Verifica que estés usando la clave correcta
- Asegúrate de que el dominio coincida
- Revisa que no haya espacios extra en la clave

### Formulario no se envía

- Revisa la consola del navegador para errores
- Verifica que reCAPTCHA esté funcionando
- Asegúrate de que el token se esté generando

## 📱 Características del reCAPTCHA v3

✅ **Invisible**: No requiere interacción del usuario
✅ **Inteligente**: Analiza el comportamiento del usuario
✅ **Adaptativo**: Ajusta la dificultad según el riesgo
✅ **Sin CAPTCHA**: Experiencia de usuario fluida
✅ **Score basado**: Evaluación continua del riesgo

## 🔗 Enlaces Útiles

- [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
- [Documentación de reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)
- [Guía de Implementación](https://developers.google.com/recaptcha/docs/display)

---

**Nota**: Nunca compartas tu clave secreta en el frontend. Solo la clave del sitio debe estar visible en el código del cliente.
