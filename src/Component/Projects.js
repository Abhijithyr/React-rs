import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css"; 

const projects = [
  {
    id: 1,
    title: "Projects 1",
    content: "Discover the beauty of modern villa designs with innovative architecture.",
    image: "https://via.placeholder.com/300/0000FF/FFFFFF", 
    details: "This project showcases modern villa designs with luxurious interiors.",
    path: "/projects/project1",
  },
  {
    id: 2,
    title: "Projects 2",
    content: "Explore the sophisticated designs of a luxury apartment complex in the city.",
    image: "https://via.placeholder.com/300/00FF00/FFFFFF", 
    details: "The apartment complex offers high-end amenities for modern living.",
    path: "/projects/project1",
  },
  {
    id: 3,
    title: "Projects 3",
    content: "High-end office spaces designed for maximum productivity.",
    image: "https://via.placeholder.com/300/FF0000/FFFFFF", 
    details: "The office building features modern workspaces and smart technology.",
    path: "/projects/project1",
  },
  {
    id: 4,
    title: "Projects 4",
    content: "A community-driven housing estate with modern amenities.",
    image: "https://via.placeholder.com/300/FFFF00/FFFFFF", 
    details: "This estate combines modern living with nature, ideal for families.",
    path: "/projects/project1",
  },
];

const Projects = () => {
  const navigate = useNavigate(); 

  const handleViewMore = (path) => {
    navigate(path); 
  };

  return (
    <div className="projects-main-container">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projects.map((pkg) => (
          <div key={pkg.id} className="project-card">
            <img src={pkg.image} alt={pkg.title} className="project-image" />
            <h4 className="project-title">{pkg.title}</h4>
            <p className="project-content">{pkg.content}</p>
            <button
              className="project-view-more-button"
              onClick={() => handleViewMore(pkg.path)} 
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;