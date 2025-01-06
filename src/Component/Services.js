import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Services.css";
import Servicemain from "../Component/Images/Services.png"; // Background image for hero section
import Service1 from "../Component/Images/Service-1.webp";
import Service2 from "../Component/Images/Service-2.webp";
import Service3 from "../Component/Images/Service-3.webp";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with duration and one-time animation
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          background: `url(${Servicemain}) no-repeat center center/cover`,
        }}
      >
        <h1 className="hero-title" data-aos="fade-down">
          Our Services
        </h1>
      </div>

      {/* Services Section */}
      <div className="service-container">
        <div className="service-header" data-aos="fade-up">
          <h2>What We Do</h2>
          <hr />
        </div>

        <div className="services-wrapper">
          {/* General Contract */}
          <div className="service" data-aos="fade-right">
            <img src={Service1} alt="Service1" loading="lazy" />
            <h5>General Contract</h5>
            <hr />
            <p>
              We provide end-to-end general contracting services, managing
              everything from planning and procurement to execution and safety.
            </p>
          </div>

          {/* Project Planning */}
          <div className="service" data-aos="fade-up">
            <img src={Service2} alt="Service2" loading="lazy" />
            <h5>Project Planning</h5>
            <hr />
            <p>
              Our project planning services ensure a seamless construction
              process, from initial concept to final execution.
            </p>
          </div>

          {/* House Refurbishment */}
          <div className="service" data-aos="fade-left">
            <img src={Service3} alt="Service3" loading="lazy" />
            <h5>House Refurbishment</h5>
            <hr />
            <p>
              We offer expert house refurbishment services, transforming your
              space with modern designs while preserving its character.
            </p>
          </div>

          {/* Kitchen Remodeling */}
          <div className="service" data-aos="zoom-in">
            <img src={Service1} alt="Service3" loading="lazy" />
            <h5>Kitchen Remodeling</h5>
            <hr />
            <p>
              Our kitchen remodeling services blend functionality with style,
              creating the perfect space for cooking and gathering.
            </p>
          </div>

          {/* Interior Design */}
          <div className="service" data-aos="fade-up">
            <img src={Service2} alt="Service3" loading="lazy" />
            <h5>Interior Design</h5>
            <hr />
            <p>
              Our interior design services bring your vision to life, creating
              elegant and functional spaces tailored to your style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
