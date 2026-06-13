import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import ServicesEcosystem from "../component/ServiceAndEcoSystem";
import IndustriesGrid from "../component/IndustriesGrid";
import TechStackShowcase from "../component/TechStackShowcase";
import PrecisionMetrics from "../component/PrecisionMetrics";
import EngineeringPrinciples from "../component/EngineeringPrinciples";
import ConsultationHook from "../component/ConsultationHook";
import ContactFunnel from "../component/ContactFunnel";
import Footer from "../component/Footer";

const InitialPageLayout = () => {
return (
  <>
    <Navbar />
    <Hero />
    
    {/* PHASE 1: VALUE DEFINITION (What we do & Who we do it for) */}
    <ServicesEcosystem />
    <IndustriesGrid />
    
    {/* PHASE 2: TECHNICAL & LOGICAL AUTHORITY (How we build & Our tech stack) */}
    <TechStackShowcase />
    <PrecisionMetrics />
    
    {/* PHASE 3: OPERATIONAL VALIDATION (Building trust without reviews) */}
    <EngineeringPrinciples />
    
    {/* PHASE 4: THE CLOSING INTERFACE (Dual-layer final funnel) */}
    <ConsultationHook /> {/* "Tell Your Problem to Us" works perfectly here as the final push */}
    <ContactFunnel />     {/* The formal contact form directly below it */}
    
    <Footer />
  </>
)
};
export default InitialPageLayout;
