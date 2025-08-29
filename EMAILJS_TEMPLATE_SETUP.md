# Configuración del Template de EmailJS

## Problema

El formulario se envía pero no llega la información completa al email. Esto suele suceder cuando el template de EmailJS no está configurado para recibir todos los parámetros.

## Solución: Configurar el Template en EmailJS

### 1. Ir a EmailJS Dashboard

- Ve a [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
- Inicia sesión con tu cuenta

### 2. Editar el Template

- Ve a "Email Templates" en el menú lateral
- Busca el template con ID: `template_4rfzgcb`
- Haz clic en "Edit"

### 3. Configurar el Template HTML

Reemplaza el contenido del template con este código:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Nuevo Formulario de Contacto</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: #000;
        color: white;
        padding: 20px;
        text-align: center;
      }
      .content {
        background: #f9f9f9;
        padding: 20px;
      }
      .field {
        margin-bottom: 15px;
      }
      .label {
        font-weight: bold;
        color: #555;
      }
      .value {
        margin-left: 10px;
      }
      .footer {
        margin-top: 30px;
        padding: 20px;
        background: #eee;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Nuevo Formulario de Contacto</h1>
        <p>Brito Brand ha recibido una nueva solicitud</p>
      </div>

      <div class="content">
        <div class="field">
          <span class="label">Nombre:</span>
          <span class="value">{{from_name}}</span>
        </div>

        <div class="field">
          <span class="label">Email:</span>
          <span class="value">{{from_email}}</span>
        </div>

        <div class="field">
          <span class="label">Empresa/Marca:</span>
          <span class="value">{{company}}</span>
        </div>

        <div class="field">
          <span class="label">Servicio Solicitado:</span>
          <span class="value">{{service}}</span>
        </div>

        <div class="field">
          <span class="label">Tiempo Estimado:</span>
          <span class="value">{{estimated_time}}</span>
        </div>

        <div class="field">
          <span class="label">Presupuesto:</span>
          <span class="value">{{budget}}</span>
        </div>

        <div class="field">
          <span class="label">¿Cómo te encontró?:</span>
          <span class="value">{{source}}</span>
        </div>

        <div class="field">
          <span class="label">Descripción del Proyecto:</span>
          <div class="value" style="margin-top: 10px; white-space: pre-wrap;">
            {{description}}
          </div>
        </div>

        <div class="field">
          <span class="label">Consentimiento Marketing:</span>
          <span class="value">{{marketing_consent}}</span>
        </div>

        <div class="field">
          <span class="label">Fecha y Hora:</span>
          <span class="value">{{timestamp}}</span>
        </div>
      </div>

      <div class="footer">
        <p>
          <strong>Nota:</strong> Este email fue enviado desde el formulario de
          contacto de Brito Brand.
        </p>
        <p>Token reCAPTCHA: {{recaptcha_token}}</p>
      </div>
    </div>
  </body>
</html>
```

### 4. Configurar el Asunto del Email

En el campo "Subject", asegúrate de que esté configurado como:

```
{{subject}}
```

### 5. Configurar el Destinatario

En el campo "To Email", asegúrate de que esté configurado como:

```
{{to_email}}
```

### 6. Guardar el Template

- Haz clic en "Save" para guardar los cambios

## Variables del Template

El template debe incluir estas variables (entre dobles llaves):

- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{company}}` - Nombre de la empresa
- `{{service}}` - Servicio solicitado
- `{{estimated_time}}` - Tiempo estimado
- `{{budget}}` - Presupuesto
- `{{source}}` - Fuente de contacto
- `{{description}}` - Descripción del proyecto
- `{{marketing_consent}}` - Consentimiento de marketing
- `{{timestamp}}` - Fecha y hora
- `{{recaptcha_token}}` - Token de reCAPTCHA
- `{{subject}}` - Asunto del email
- `{{to_email}}` - Email del destinatario

## Verificación

Después de configurar el template:

1. Envía un formulario de prueba
2. Verifica que llegue el email con toda la información
3. Revisa la consola del navegador para ver los logs de depuración

## Problemas Comunes

- **Variables no definidas**: Asegúrate de que todas las variables estén entre dobles llaves
- **Template no guardado**: Verifica que hayas guardado los cambios
- **ID incorrecto**: Confirma que el TEMPLATE_ID en el código coincida con el del dashboard
