export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_p0laqbb',
  TEMPLATE_ID: 'template_4rfzgcb',
  PUBLIC_KEY: 'PK8zAksv2oq5dTMQX',
  TO_EMAIL: 'britobrand@gmail.com',
};

// Tipos para los parámetros del email
export interface EmailTemplateParams {
  to_email: string;
  subject: string;
  from_name: string;
  from_email: string;
  company: string;
  service: string;
  estimated_time: string;
  budget: string;
  source: string;
  description: string;
  marketing_consent?: string;
  recaptcha_token: string;
  timestamp: string;
}
