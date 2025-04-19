import React from 'react';
import ContactMobile from '../components/ContactMobile';
import ContactDesktop from '../components/ContactDesktop';
import useIsMobile from '../hooks/useIsMobile';

const Contact = () => {
  const isMobile = useIsMobile();
  return isMobile ? <ContactMobile /> : <ContactDesktop />;
};

export default Contact;
