import React from 'react';
import './Education.css';

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  inProgress?: boolean;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Cloud Computing',
      school: 'Western Governors University',
      year: 'Expected Graduation: December 2026',
      inProgress: true
    },
    {
      degree: 'Associate of Science in Computerized Machining',
      school: 'Ashland Community and Technical College',
      year: '2016'
    },
    {
      degree: 'Associate of Science in Computer Graphic Design',
      school: 'Spencerian College',
      year: '2006'
    }
  ];

  return (
    <section className="section education-section">
      <h2 className="section-title">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="section-icon"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
        EDUCATION
      </h2>

      <div className="education-items">
        {educationItems.map((item, index) => (
          <div key={index} className={`education-item ${item.inProgress ? 'in-progress' : ''}`}>
            <div className="education-content">
              <h3 className="degree">{item.degree}</h3>
              <p className="school">{item.school}</p>
              <p className="year">{item.year}</p>
            </div>
            
            {item.inProgress && (
              <div className="progress-indicator">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <span className="progress-text">In Progress</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;