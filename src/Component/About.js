import React from "react";
import "./About.css"; 
import Mission from "../Component/Images/Mission.webp";
import Values from "../Component/Images/Ourvalues.webp";
import Whatwedo from "../Component/Images/Whatwedo.webp";
import Whychooseus from "../Component/Images/Whychooseus.webp";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section about-hero">
        <h1>ABOUT US</h1>
        <p className="hero-text">
          Building your dreams, one project at a time. Discover how we bring
          vision to life through excellence in construction.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <div className="about_section_sub">
          <img
            src={Mission}
            alt="Mission"
            className="about-section-image"
            loading="lazy"
          />
          <p>
            We are committed to providing world-class construction services that
            surpass our clients' expectations. With a focus on innovation,
            sustainability, and safety, we strive for excellence in every
            project.
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>Our Values</h2>
        <div className="about_section_sub">
          <img
            src={Values}
            alt="Values"
            className="about-section-image"
            loading="lazy"
          />
          <p>
            Transparency, quality, and client satisfaction are at the core of
            everything we do. Our dedicated team ensures that every project
            reflects our core values and commitment to excellence.
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>What We Do</h2>
        <div className="about_section_sub">
          <img
            src={Whatwedo}
            alt="Services"
            className="about-section-image"
            loading="lazy"
          />
          <p>
            From residential to commercial construction, our services are
            diverse and tailored to meet the unique needs of our clients.
            Whether you're building a dream home or renovating a space, we have
            you covered.
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <div className="about_section_sub">
          <img
            src={Whychooseus}
            alt="Why Choose Us"
            className="about-section-image"
            loading="lazy"
          />
          <p>
            With decades of experience and a passion for excellence, R S
            Construction ensures that your project is handled with care,
            expertise, and a keen attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
