import React from "react";
import { useState } from "react";
import { felixbrito } from "@/assets/images/index"
import InfoCard from "./InfoCard";

const InfoSection = () => {
  return (
    <div className="space-y-4">
      <InfoCard title="About" subtitle="Acerca de mí" content="Lorem ipsum dolor sit amet..." image={felixbrito} />
      <InfoCard title="Servicios" subtitle="Lo que hago" content="Lorem ipsum dolor sit amet..." />
      {/* <InfoCard title="Social" content="Enlaces a redes sociales" />
      <InfoCard title="Experiencia" content="Resumen de experiencia" /> */}
    </div>
  );
};



export default InfoSection;