import React from 'react';

const Summary: React.FC = () => {
  return (
    <section className="section">
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
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        PROFESSIONAL SUMMARY
      </h2>
      <p className="summary">
        Cloud security architect and adversary emulation expert with proven leadership in designing secure cloud environments and conducting advanced security assessments. Specialized in leveraging the <span className="highlight">MITRE ATT&CK framework</span> to identify vulnerabilities across <span className="highlight">AWS</span>, <span className="highlight">Azure</span>, <span className="highlight">GCP</span>, and <span className="highlight">OCI</span> platforms. Demonstrated excellence in developing <span className="highlight">Infrastructure as Code</span> solutions, custom attack simulations, and implementing robust security controls. Currently leading a team of cloud security specialists delivering high-impact security assessments and remediation strategies for critical infrastructure.
      </p>
      
      <div className="security-clearance-info">
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
          className="clearance-icon"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <span>Security Clearance: Current Top Secret clearance with SCI eligibility</span>
      </div>
    </section>
  );
};

export default Summary;