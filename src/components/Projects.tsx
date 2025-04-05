import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  detail?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'cloud-attack',
      title: 'Cloud Attack Simulation Framework',
      description: 'Comprehensive Terraform-based framework for deploying realistic cloud attack scenarios with configurable vulnerability profiles',
      tags: ['AWS', 'Terraform', 'Security', 'IaC'],
      detail: 'This project involved creating a modular, automated framework that security teams can use to simulate realistic cloud-based attacks. The framework uses Terraform to provision vulnerable infrastructure in controlled environments, allowing red teams and security professionals to practice exploitation techniques and blue teams to test detection capabilities. The framework includes configurable modules for common misconfigurations in IAM, storage, networking, and compute resources.'
    },
    {
      id: 'ctf-lab',
      title: 'Cloud Hacking CTF Lab',
      description: 'Capture-the-flag environment for security conference attendees using infrastructure-as-code in AWS',
      tags: ['AWS', 'CTF', 'Training', 'Security'],
      detail: 'Designed and implemented a multi-level capture-the-flag competition environment for security conferences. The platform features progressive difficulty levels that test participants on cloud security skills ranging from basic S3 exploration to advanced IAM privilege escalation and database exfiltration. The entire environment is deployed using infrastructure-as-code, making it easy to spin up for events and tear down afterward.'
    },
    {
      id: 'cve-testbed',
      title: 'CVE-2023-46404 Testbed',
      description: 'Security testing environment for validating ActiveMQ vulnerabilities and detection capabilities',
      tags: ['CVE', 'Vulnerability', 'ActiveMQ', 'Testing'],
      detail: 'Created a dedicated testing environment to validate the security impact of CVE-2023-46404 in ActiveMQ. The testbed allows security teams to safely experiment with exploitation techniques and develop effective detection strategies. It includes instrumented components that log all activity for analysis, as well as integration points for security tools to validate their detection capabilities against this specific vulnerability.'
    },
    {
      id: 'assessment-toolkit',
      title: 'Custom Cloud Security Assessment Toolkit',
      description: 'Specialized tools for cloud security posture evaluation across multiple CSPs',
      tags: ['Multi-cloud', 'Security', 'Assessment', 'Automation'],
      detail: 'Developed a comprehensive toolkit for evaluating security postures across AWS, Azure, GCP, and OCI environments. The toolkit incorporates best practices from CIS benchmarks, CSP-specific security frameworks, and MITRE ATT&CK for Cloud. It includes custom modules for permissions analysis, network security validation, data protection assessment, and logging/monitoring evaluation. The toolkit generates detailed reports with prioritized remediation guidance and can be integrated with CI/CD pipelines for continuous security assessment.'
    },
    {
      id: 'resume-webapp',
      title: 'Interactive Resume Web Application',
      description: 'This very application - a modern, responsive web resume built with React, TypeScript, and AWS Amplify',
      tags: ['React', 'TypeScript', 'AWS Amplify', 'Portfolio'],
      detail: 'Created this interactive resume web application using React, TypeScript, and AWS Amplify to showcase both professional experience and cloud development skills. The application features responsive design, authentication capabilities, and is deployed using a CI/CD pipeline through AWS Amplify. This project demonstrates practical implementation of modern web development and cloud infrastructure skills.'
    }
  ];

  const handleProjectClick = (projectId: string) => {
    if (selectedProject === projectId) {
      setSelectedProject(null); // Close if already open
    } else {
      setSelectedProject(projectId); // Open the clicked project
    }
  };

  return (
    <section className="section projects-section">
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
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        PROJECTS & ACHIEVEMENTS
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${selectedProject === project.id ? 'expanded' : ''}`}
            onClick={() => handleProjectClick(project.id)}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
            
            {selectedProject === project.id && project.detail && (
              <div className="project-detail">
                <p>{project.detail}</p>
              </div>
            )}
            
            <div className="project-expand-indicator">
              {selectedProject === project.id ? 'Show less' : 'Show more'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;