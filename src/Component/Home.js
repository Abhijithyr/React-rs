import React, { useState, useEffect } from "react";
import "./Home.css";
// import Modal from "./Modal";
import House1 from "../Component/Images/MnImage1.webp";
import House2 from "../Component/Images/MnImage2.webp";
import House3 from "../Component/Images/MnImage3.webp";
import House4 from "../Component/Images/MnImage4.webp";
import Villa from "../Component/Images/Villa.webp";
import Residential from "../Component/Images/Residential.webp";
import Commercial from "../Component/Images/Commercial.webp";

const Home = () => {
  const images = [House1, House2, House3, House4]; 
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <>

      {/* <Modal /> */}

      <div className="home_mn_carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="home_mn_carousel_image"
          loading="lazy"
        />
      </div>


      <div className="home_con_se_container">
        <div className="hom_con_se_section_title">
          <h3>OUR CONSTRUCTION SERVICES</h3>
          <p>
            Upgrade your ambience and experience the unparalleled lifestyle
            offered by the highly-skilled team of architects, engineers, and
            designers at Dream Value Realtors Construction Company in Bangalore.
          </p>
        </div>
        <div className="home_con_se_row">
          <div className="col-md-4 col-sm-6">
            <div className="int text-center services">
              <div>
                <img
                  src={Residential}
                  alt="Residential Construction"
                  loading="lazy"
                />
              </div>
              <div className="hom_con_se_post-header">
                <h4>
                  <a href="#residential">RESIDENTIAL CONSTRUCTION</a>
                </h4>
                <div className="date">Homes that define your lifestyle</div>
                <hr />
              </div>
              <p>
                Buying your dream home is not challenging anymore. In Bangalore,
                we build your heaven-like home at posh locations. With our
                biggest functionalities; connectivity, affordability,
                accessibility, and sustainability, we construct premium
                furnished and semi-furnished homes.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="int text-center services">
              <div>
                <img
                  src={Commercial}
                  alt="Commercial Construction"
                  loading="lazy"
                />
              </div>
              <div className="hom_con_se_post-header">
                <h4>
                  <a href="#commercial">COMMERCIAL CONSTRUCTION</a>
                </h4>
                <div className="date">
                  Commercial spaces that inspire innovation
                </div>
                <hr />
              </div>
              <p>
                Constructing inspiring commercial spaces where leaders and teams
                can sit, work, innovate, and grow together. We don't just create
                offices and commercial buildings, we deliver an ambience where
                you create the future.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="int text-center services">
              <div>
                <img src={Villa} alt="Villa Construction" loading="lazy" />
              </div>
              <div className="hom_con_se_post-header">
                <h4>
                  <a href="#villa">VILLA CONSTRUCTION</a>
                </h4>
                <div className="date">Turn your dream villa into a reality</div>
                <hr />
              </div>
              <p>
                Villa construction needs a lot of professionalism, exceptional
                efficiency, and quality service. After noticing every small
                detail, we construct modern and luxurious villas from scratch to
                give you exactly what you are looking for!
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="home_con_se_container">
        <h2 className="section-title">Why R S Construction?</h2>
        <p className="section-subtitle">
          We ensure peace of mind, trust, and transparent house construction
          services.
        </p>
        <div className="row bb-why-us__row">
          {[
            {
              href: "/why-us#EscrowModel",
              imageSrc:
                "https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-3.svg",
              title: "Safe Money Transaction",
              text: "No Advance. Contractor is paid only once the work is complete",
            },
            {
              href: "/why-us#Transparent",
              imageSrc:
                "https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-1.svg",
              title: "Absolute Transparency",
              text: "Clear and Detailed Quotation. Online tracking of projects",
            },
            {
              href: "/why-us#QualityChecked",
              imageSrc:
                "https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-4.svg",
              title: "Assured Quality Control",
              text: "470+ Quality (QASCON) Checks performed by team of experts",
            },
            {
              href: "/why-us#NoDelays",
              imageSrc:
                "https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-2.svg",
              title: "Zero Delays",
              text: "Zero tolerance for delays",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col col-sm-6 col-md-6 col-lg-3 bb-why-us__grid"
            >
                <div className="wrapper">
                  <figure className="bb-why-us__grid__image">
                    <img loading="lazy" src={item.imageSrc} alt={item.title} />
                  </figure>
                  <h6 className="bb-why-us__grid__title">{item.title}</h6>
                  <p className="bb-why-us__grid__text">{item.text}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Home;
