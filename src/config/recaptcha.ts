// Configuración de reCAPTCHA v3
export const RECAPTCHA_CONFIG = {
  // Clave del sitio de reCAPTCHA
  SITE_KEY: '6LdNQLYrAAAAAOtJrKTwJOkeB0_7KUPRpUWw9LIf',

  // Acciones disponibles para reCAPTCHA
  ACTIONS: {
    CONTACT_FORM: 'contact_form',
    SUBSCRIBE: 'subscribe',
    LOGIN: 'login',
  },

  // Configuración de umbral de score (0.0 a 1.0)
  // 0.0 = muy probable que sea un bot
  // 1.0 = muy probable que sea un humano
  SCORE_THRESHOLD: 0.5,
};

// Función para obtener la URL del script de reCAPTCHA
export const getRecaptchaScriptUrl = (siteKey: string) => {
  return `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
};

// Función para validar el score de reCAPTCHA
export const validateRecaptchaScore = (score: number): boolean => {
  return score >= RECAPTCHA_CONFIG.SCORE_THRESHOLD;
};
