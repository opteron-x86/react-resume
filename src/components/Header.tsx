import React from 'react';
import './Header.css';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onContactClick
}) => {
  return (
    <header className="resume-header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="name">CALEB N. CLINE</h1>
          <p className="title">Senior Cloud Security Architect</p>
          <div className="contact-info">
            <span className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Columbus Metropolitan Area, OH
            </span>
            <span className="contact-item">
              <a href="https://www.linkedin.com/in/caleb-cline-9a89646a/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn Profile
              </a>
            </span>
          </div>
        </div>
        
        <div className="header-right">
          <button className="contact-button" onClick={onContactClick}>
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="security-clearance">
        Security Clearance: Current Top Secret clearance with SCI eligibility
      </div>
    </header>
  );
};

export default Header;