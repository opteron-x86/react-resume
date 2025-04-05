import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const coreSkills = [
    'Cloud Security Architecture',
    'Adversarial Emulation',
    'MITRE ATT&CK Framework',
    'Cloud Infrastructure Development',
    'Infrastructure as Code',
    'Security Assessments',
    'Scripting and Automation',
    'Red Team Operations',
    'Team Leadership',
    'Linux Systems',
    'Agile Development',
    'Project Management'
  ];

  const technicalSkills = [
    {
      category: 'Cloud Platforms',
      skills: 'AWS (EC2, S3, IAM, DynamoDB, RDS, Amplify), Azure, GCP, OCI'
    },
    {
      category: 'Cloud Security',
      skills: 'CSP Security Services (GuardDuty, Defender, Security Command Center), IAM Security, API Security, Attack Surface Management'
    },
    {
      category: 'Scripting and Programming',
      skills: 'Python, PowerShell, Bash, SQL, HTML, CSS, JavaScript'
    },
    {
      category: 'Adversarial Tools',
      skills: 'MITRE Caldera, Kali Linux, Custom Exploitation Scripts, WebApp Exploitation, Command Injection Techniques'
    },
    {
      category: 'Infrastructure as Code',
      skills: 'Terraform, CloudFormation, CI/CD Pipelines'
    },
    {
      category: 'Operating Systems',
      skills: 'Linux (Arch Linux, RHEL, Ubuntu), Windows Server'
    },
    {
      category: 'Development',
      skills: 'React, Vite, TypeScript, Flask, Git, WebApp & API Security'
    },
    {
        category: 'Security Frameworks',
        skills: 'MITRE ATT&CK, OWASP, NIST, CIS, Cyber Kill Chain'
    }
  ];

  return (
    <div className="skills-section">
      <section className="section core-skills">
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
            <line x1="22" y1="12" x2="2" y2="12"></line>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
            <line x1="6" y1="16" x2="6.01" y2="16"></line>
            <line x1="10" y1="16" x2="10.01" y2="16"></line>
          </svg>
          CORE COMPETENCIES
        </h2>
        <div className="skill-tags">
          {coreSkills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section technical-skills">
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
            <path d="M2 3h20"></path>
            <circle cx="12" cy="12" r="2"></circle>
            <path d="M12 10v4"></path>
            <path d="M12 14a7 7 0 0 0 7 7"></path>
            <path d="M12 14a7 7 0 0 1-7 7"></path>
          </svg>
          TECHNICAL SKILLS
        </h2>
        <div className="tech-skills-grid">
          {technicalSkills.map((item, index) => (
            <div key={index} className="tech-skill-item">
              <h4 className="tech-skill-category">{item.category}:</h4>
              <p className="tech-skill-description">{item.skills}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;