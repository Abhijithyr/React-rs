import React from "react";
import "./WhatsappButton.css"; 
import WhatsApp from '../Component/Images/WhatsApp.webp'

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919916477467" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <img
        src={WhatsApp}
        alt="WhatsApp"
        className="whatsapp-logo"
        loading="lazy"
      />
    </a>
  );
};

export default WhatsappButton;
