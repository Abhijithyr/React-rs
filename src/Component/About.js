import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./About.css";
import Mission from "../Component/Images/Mission.webp";
import Values from "../Component/Images/Ourvalues.webp";
import Vision from "../Component/Images/ourvision.png";
import Aboutusmain from '../Component/Images/Aboutusmain.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations with a duration of 1000ms
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          background: `url(${Aboutusmain}) no-repeat center center/cover`,
        }}
      >
        <h1 className="hero-title" data-aos="fade-down">
          About Us
        </h1>
      </div>

      {/* About Section */}
      <section className="about">
        <h2 data-aos="fade-right">About Us</h2>
        <p data-aos="fade-left">
        Building your dreams, one project at a time. Discover how we bring vision to life through excellence in construction.
        </p>

        <div className="about-grid">
          {/* Mission */}
          <div className="about-item" data-aos="zoom-in">
            <img
              src={Mission}
              alt="Mission"
              className="about-image"
              loading="lazy"
            />
            <h3>Our Mission</h3>
            <p>
            We are committed to providing world-class construction services that surpass our clients' expectations. 
            With a focus on innovation, sustainability, and safety, we strive for excellence in every project.
            </p>
          </div>

          {/* Vision */}
          <div className="about-item" data-aos="zoom-in" data-aos-delay="200">
            <img
              src={Vision}
              alt="Vision"
              className="about-image"
              loading="lazy"
            />
            <h3>Our Vision</h3>
            <p>
            We are dedicated to delivering exceptional construction services that exceed our clients' expectations. 
            With a strong focus on innovation, sustainability, and safety, 
            we aim to achieve excellence in every project we undertake.
            </p>
          </div>

          {/* Values */}
          <div className="about-item" data-aos="zoom-in" data-aos-delay="400">
            <img
              src={Values}
              alt="Values"
              className="about-image"
              loading="lazy"
            />
            <h3>Our Values</h3>
            <p>
            Transparency, quality, and client satisfaction are at the core of everything we do. 
            Our dedicated team ensures that every project reflects our core values and commitment to excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
