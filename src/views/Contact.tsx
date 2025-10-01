import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactMobile from '../components/ContactMobile';
import ContactDesktop from '../components/ContactDesktop';
import useIsMobile from '../hooks/useIsMobile';

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Helmet>
        <title>Contacto | BritoBrand – Félix Brito Branding</title>
        <meta
          name="description"
          content="Escribenos para consultas de branding, identidad visual o dirección de arte. Félix Brito trabaja con marcas en todo el mundo."
        />
        <meta
          name="keywords"
          content="contacto, consulta, branding, identidad visual, dirección de arte, Félix Brito, BritoBrand"
        />
      </Helmet>

      {/* H1 oculto para SEO */}
      <h1 className="sr-only">Contacta a BritoBrand</h1>

      {isMobile ? <ContactMobile /> : <ContactDesktop />}
    </>
  );
};

export default Contact;
