import React, { useState } from 'react'
import logo from '../Component/Images/newlogo.webp'
import './Header.css'
import {MobileOutlined} from '@ant-design/icons';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header sticky-header">
      <div className="logo">
      <img src={logo} alt="Logo" loading="lazy"/>
      </div>
            <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className='nav_ul'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    {/* <li><a href="/projects">Projects</a></li> */}
                    <li><a href="/packages">Packages</a></li>
                    <li><a href="/costestimator">Cost Estimator</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li className='nav_call'><a href="tel:+91 9916477467"><MobileOutlined />9916477467</a></li>
                </ul>
            </nav>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>
        </header>
  )
}

export default Header
