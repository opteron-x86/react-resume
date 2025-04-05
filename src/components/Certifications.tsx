import React from 'react';
import './Certifications.css';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  logo: string;
  featured?: boolean;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 'cissp',
      name: 'Certified Information Systems Security Professional (CISSP)',
      issuer: 'ISC²',
      logo: 'cissp-logo',
      featured: true
    },
    {
      id: 'ccsp',
      name: 'Certified Cloud Security Professional (CCSP)',
      issuer: 'ISC²',
      logo: 'ccsp-logo',
      featured: true
    },
    {
      id: 'comptia-security',
      name: 'Security+',
      issuer: 'CompTIA',
      logo: 'comptia-logo'
    },
    {
      id: 'comptia-network',
      name: 'Network+',
      issuer: 'CompTIA',
      logo: 'comptia-logo'
    },
    {
      id: 'comptia-aplus',
      name: 'A+',
      issuer: 'CompTIA',
      logo: 'comptia-logo'
    },
    {
      id: 'comptia-pentest',
      name: 'PenTest+',
      issuer: 'CompTIA',
      logo: 'comptia-logo'
    },
    {
      id: 'comptia-cloud',
      name: 'Cloud+',
      issuer: 'CompTIA',
      logo: 'comptia-logo'
    },
    {
      id: 'ceh',
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      logo: 'eccouncil-logo'
    },
    {
      id: 'aws-cp',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      logo: 'aws-logo'
    },
    {
      id: 'az-900',
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      logo: 'microsoft-logo'
    },
    {
      id: 'lpi',
      name: 'Linux Professional Institute (LPI) Linux Essentials',
      issuer: 'Linux Professional Institute',
      logo: 'lpi-logo'
    },
    {
      id: 'itil',
      name: 'ITIL Foundations 2011',
      issuer: 'AXELOS',
      logo: 'itil-logo'
    }
  ];

  // Separate featured certifications from the rest
  const featuredCerts = certifications.filter(cert => cert.featured);
  const regularCerts = certifications.filter(cert => !cert.featured);

  return (
    <section className="section certifications-section">
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
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        CERTIFICATIONS
      </h2>

      <div className="certifications-container">
        {/* Featured certifications */}
        {featuredCerts.length > 0 && (
          <div className="featured-certifications">
            {featuredCerts.map(cert => (
              <div key={cert.id} className="certification-card featured">
                <div className="certification-logo">
                  <div className={`logo ${cert.logo}`}></div>
                </div>
                <div className="certification-info">
                  <h3 className="certification-name">{cert.name}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                </div>
                <div className="featured-badge">Featured</div>
              </div>
            ))}
          </div>
        )}

        {/* Regular certifications in a grid */}
        <div className="regular-certifications">
          {regularCerts.map(cert => (
            <div key={cert.id} className="certification-card">
              <div className="certification-content">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;