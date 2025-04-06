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
        <div className="profile-photo">
          
          <img src="/profilephoto.jpg" alt="Caleb N. Cline" />
        </div>
        
        <div className="header-info">
          <div className="header-text">
            <h1 className="name">CALEB N. CLINE</h1>
            <p className="title">Senior Cloud Security Architect & Adversary Emulation Expert</p>
          </div>
          
          <div className="contact-info">
            <span className="contact-item">
              <a href="https://www.google.com/maps/place/Columbus+Metropolitan+Area,+OH" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Columbus, Ohio Metropolitan Area
              </a>
            </span>
            <span className="contact-item">
              <a href="https://www.linkedin.com/in/caleb-cline-9a89646a/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </span>
            <span className="contact-item">
                <a href="https://github.com/opteron-x86" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </span>
          </div>
        </div>
        
        <div className="header-actions">
          <button className="contact-button" onClick={onContactClick}>
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;