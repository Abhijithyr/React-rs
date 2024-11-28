import React from 'react';
import './Services.css';
import Service1 from '../Component/Images/Service-1.webp'
import Service2 from '../Component/Images/Service-2.webp'
import Service3 from '../Component/Images/Service-3.webp'

const Services = () => {
  return (
    <>
      <div className="service-container">
        <div className="service-header">
          <h2>What We Do</h2>
          <hr />
        </div>

        <div className="services-wrapper">
          <div className="service">
          <img src={Service1} alt="Service1" loading="lazy"/>
            <h5>General Contract</h5>
            <hr />
            <p>We provide end-to-end general contracting services, managing everything from planning and procurement to execution and safety. Our experienced team ensures your project is completed on time, within budget, and to the highest quality standards. Trust us to handle every detail with precision and care.</p>
          </div>

          <div className="service">
          <img src={Service2} alt="Service2" loading="lazy"/>
            <h5>Project Planning</h5>
            <hr />
            <p>Our project planning services ensure a seamless construction process, from initial concept to final execution. We handle scheduling, resource allocation, and risk management to keep your project on track. Let us bring your vision to life with expert precision and efficiency.</p>
          </div>

          <div className="service">
          <img src={Service3} alt="Service3" loading="lazy"/>
            <h5>House Refurbishment</h5>
            <hr />
            <p>We offer expert house refurbishment services, transforming your space with modern designs while preserving its character. From minor upgrades to full renovations, we handle every detail with precision. Enhance your home’s comfort, functionality, and value with our tailored solutions.</p>
          </div>

          <div className="service">
          <img src={Service1} alt="Service3" loading="lazy"/>
            <h5>Kitchen Remodeling</h5>
            <hr />
            <p>Our kitchen remodeling services blend functionality with style, creating the perfect space for cooking and gathering. From modern designs to efficient layouts, we customize every detail to suit your needs. Upgrade your kitchen with quality craftsmanship and innovative solutions.</p>
          </div>

          <div className="service">
          <img src={Service2} alt="Service3" loading="lazy"/>
            <h5>Interior Design</h5>
            <hr />
            <p>Our interior design services bring your vision to life, creating elegant and functional spaces tailored to your style. We blend aesthetics with practicality, ensuring each room reflects your personality. Elevate your home’s ambiance with our expert design solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
