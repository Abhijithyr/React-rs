import React from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";
import Package1 from "../Component/Images/Package1.webp";
import Package2 from "../Component/Images/Package2.webp";
import Package3 from "../Component/Images/Package3.webp";
import Package4 from "../Component/Images/Package4.webp";

const packages = [
  {
    id: 1,
    title: "RESIDENTIAL BUILDING PACKAGES (CONCRETE BLOCKS)",
    image: Package1,
    content: "This package includes high-quality concrete blocks...",
    path: "/package/concrete-blocks",
  },
  {
    id: 2,
    title: "RESIDENTIAL BUILDING PACKAGES (RED CLAY BRICKS)",
    image: Package2,
    content: "This package uses traditional red clay bricks for durability...",
    path: "/package/redclaybricks", 
  },
  {
    id: 3,
    title: "COMMERICIAL BUILDING PACKAGE",
    image: Package3,
    content: "Ideal for commercial spaces with steel frame structures...",
    path: "/package/commericialpackage", 
  },
  {
    id: 4,
    title: "VILLA CONSTRUTION PACKAGE",
    image: Package4,
    content: "Details coming soon for this new package...",
    path: "/package/villapackage", 
  },
];

const Packages = () => {
  const navigate = useNavigate(); 

  const handleViewMore = (path) => {
    navigate(path); 
  };

  return (
    <div className="package-main-container">
      <h2>PACKAGES</h2>
      <div className="packages-container">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <h4 className="package-title">{pkg.title}</h4>
            <p className="package-content">{pkg.content}</p>
            <button
              className="view-more-button"
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

export default Packages;
