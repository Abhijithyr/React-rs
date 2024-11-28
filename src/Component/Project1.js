import React from 'react';
import './Project1.css'; 
import project11 from '../Component/Images/project1-1.webp';
import project12 from '../Component/Images/project1-2.webp';
import project13 from '../Component/Images/project1-3.webp';
import project14 from '../Component/Images/project1-4.webp';

const Project1 = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">PROJECT-1</h1>
      <div className="image-row">
        <img src={project11} alt="Project 1" className="project-image" loading="lazy" />
        <img src={project12} alt="Project 2" className="project-image" loading="lazy" />
        <img src={project13} alt="Project 3" className="project-image" loading="lazy" />
        <img src={project14} alt="Project 4" className="project-image" loading="lazy" />
      </div>
      <div className="content-section">
        <p>
          At RS Construction, we pride ourselves on delivering high-quality construction services
          tailored to our clients' unique needs. With years of experience, our team ensures every
          project is built to perfection, using the best materials and adhering to industry standards.
        </p>
        <p>
          Our expertise spans residential buildings and commercial complexes. Each project is carefully
          crafted to meet the highest aesthetic and structural benchmarks, ensuring durability and functionality.
        </p>
        <p>
          Innovation is key. RS Construction integrates advanced techniques and sustainable practices to
          reduce environmental impact while optimizing efficiency and cost-effectiveness.
        </p>
        <p>
          Our dedicated team works collaboratively to deliver exceptional results. Whether it’s building
          your dream home or developing a commercial space, we turn visions into reality.
        </p>
        <p>
          RS Construction is committed to delivering projects on time, within budget, and with the utmost quality.
          Client satisfaction is our top priority, and we strive to exceed expectations at every stage.
        </p>
      </div>
    </div>
  );
};

export default Project1;
