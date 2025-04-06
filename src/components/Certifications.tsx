import React, { useState } from 'react';
import axios from 'axios';
import './Certifications.css';

interface Certification {
    id: string;
    name: string;
    issuer: string;
    logo: string;
    featured?: boolean;
    description?: string;
  }

const Certifications: React.FC = () => {

  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [certImageUrl, setCertImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

  const openCertModal = async (cert: Certification) => {
    setSelectedCert(cert);
    setLoading(true);
    setError(null);
    setCertImageUrl(null);
    
  try {
    // Call the HTTP API to get a pre-signed URL using Axios
    const response = await axios.get(`https://gkeqffmnd0.execute-api.us-east-2.amazonaws.com/certificates/${cert.id}`);
    setCertImageUrl(response.data.url);
    } catch (err) {
    console.error('Error fetching certification image:', err);
    setError('Failed to load certification image');
    } finally {
    setLoading(false);
    }
  };

  const closeCertModal = () => {
    setSelectedCert(null);
    setCertImageUrl(null);
  };

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
              <div 
                key={cert.id} 
                className="certification-card featured"
                onClick={() => openCertModal(cert)}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.name} certificate`}
              >
                <div className="certification-logo">
                  <div className={`logo ${cert.logo}`}></div>
                </div>
                <div className="certification-info">
                  <h3 className="certification-name">{cert.name}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                </div>
                <div className="featured-badge">Featured</div>
                <div className="view-indicator">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 16 16 12 12 8"></polyline>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regular certifications in a grid */}
        <div className="regular-certifications">
          {regularCerts.map(cert => (
            <div 
              key={cert.id} 
              className="certification-card"
              onClick={() => openCertModal(cert)}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.name} certificate`}
            >
              <div className="certification-content">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={closeCertModal}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal-button" onClick={closeCertModal} aria-label="Close">×</button>
            <h2 className="cert-modal-title">{selectedCert.name}</h2>
            <p className="cert-modal-issuer">Issued by: {selectedCert.issuer}</p>
            
            {selectedCert.description && (
              <p className="cert-modal-description">{selectedCert.description}</p>
            )}
            
            <div className="cert-image-container">
              {loading && <div className="loading-spinner">Loading...</div>}
              
              {error && <div className="error-message">{error}</div>}
              
              {certImageUrl && !loading && (
                <img 
                  src={certImageUrl} 
                  alt={`${selectedCert.name} Certificate`}
                  className="cert-image"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;