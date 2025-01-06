import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS animations
import "./Packages.css";

// Images
import Package1 from "../Component/Images/Package1.webp";
import Package2 from "../Component/Images/Package2.webp";
import Package3 from "../Component/Images/Package3.webp";
import Package4 from "../Component/Images/Package4.webp";
import Ourpackages from "../Component/Images/ourpackages.png"; // Background image for heading

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
    title: "COMMERCIAL BUILDING PACKAGE",
    image: Package3,
    content: "Ideal for commercial spaces with steel frame structures...",
    path: "/package/commercialpackage",
  },
  {
    id: 4,
    title: "VILLA CONSTRUCTION PACKAGE",
    image: Package4,
    content: "Details coming soon for this new package...",
    path: "/package/villapackage",
  },
];

const Packages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS animations
  }, []);

  const handleViewMore = (path) => {
    navigate(path); // Ensure client-side routing with react-router-dom
  };

  return (
    <div className="package-main-container">
      {/* Heading Section */}
      <div
        className="packages-header"
        style={{
          background: `url(${Ourpackages}) no-repeat center center/cover`,
        }}
        data-aos="fade-down"
      >
        <h1 className="header-title">OUR PACKAGES</h1>
      </div>

      {/* Subheading Section */}
      <div className="subheading-container" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="subheading-title">Our Featured Packages</h2>
      </div>

      {/* Packages Section */}
      <div className="packages-container">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="package-card"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
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
