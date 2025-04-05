import React, { useState } from 'react';
import './Experience.css';
import { Job } from '../types';

const Experience: React.FC = () => {
  // State to track expanded job sections
  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({
    'LEIDOS': true,  // Default expanded
    'HUNTINGTON_NATIONAL_BANK': false,
    'LOCKHEED_MARTIN': false,
    'NORTHROP_GRUMMAN_COLUMBUS': false,
    'NORTHROP_GRUMMAN_FAIRMONT': false,
    'UNITED_STATES_MARINE_CORPS': false
  });

  const toggleJobExpansion = (jobKey: string) => {
    setExpandedJobs({
      ...expandedJobs,
      [jobKey]: !expandedJobs[jobKey]
    });
  };

  const jobs: Job[] = [
    {
      company: 'LEIDOS',
      location: 'Columbus, OH',
      positions: [
        {
          title: 'Cybersecurity Architect & Threat Emulation Project Lead',
          period: 'March 2023 - Present',
          responsibilities: [
            'Lead and mentor a team of 3 cloud security specialists focused on AWS, Azure, GCP, and OCI environments',
            'Engineered comprehensive cloud security assessments using the MITRE ATT&CK framework, exceeding the 75% coverage target for the IaaS attack matrix across multiple cloud service providers',
            'Developed advanced "black box" testing environments with Terraform, creating realistic attack scenarios with vulnerable web applications, exploitable virtual machines, misconfigured IAM policies, and exfiltration pathways',
            'Designed and implemented a production-ready CVE-2023-46404 exploit scenario in ActiveMQ for security validation exercises',
            'Authored custom PowerShell attack scripts targeting Azure IAM weaknesses, enhancing the team\'s cloud attack capabilities',
            'Established direct partnerships with MITRE and Oracle Cloud experts to develop detection strategies for sophisticated attack techniques',
            'Delivered executive-level reporting on cloud security posture, providing actionable recommendations that transitioned project from pilot to operational status',
            'Showcased technical leadership by presenting original cloud attack scenarios at industry hacking conferences as capture-the-flag events'
          ]
        },
        {
          title: 'Cybersecurity Systems Security Architect',
          period: 'May 2022 - March 2023',
          responsibilities: [
            'Served as principal Information Systems Security Officer (ISSO) for enterprise AWS cloud migration initiatives',
            'Engineered and automated security scanning infrastructure using Prowler to assess IAM accounts, VPCs, Security Groups, S3 buckets, and core services against AWS CIS Benchmarks',
            'Implemented defense-in-depth cloud security strategies based on vulnerability assessment findings',
            'Orchestrated cloud infrastructure automation using CloudFormation templates and Ansible Playbooks',
            'Led the preparation and submission of critical change requests for major cloud migration projects',
            'Architected and deployed endpoint security solutions for cloud-based EC2 instances'
          ]
        }
      ]
    },
    {
      company: 'HUNTINGTON NATIONAL BANK',
      location: 'Columbus, OH',
      positions: [
        {
          title: 'Principal Cyber Security Operations Analyst',
          period: 'October 2021 - May 2022',
          responsibilities: [
            'Directed day shift SOC operations with leadership responsibility for seven security analysts',
            'Executed comprehensive mapping of detection capabilities using the MITRE ATT&CK framework and Splunk Security Essentials',
            'Guided analysts through complex SOAR investigations and incident response for critical security events',
            'Identified and remediated gaps in security monitoring capabilities, detection tuning, and false positive reduction',
            'Partnered with purple team to validate detection effectiveness through simulated attack scenarios',
            'Developed and implemented analyst training roadmap leveraging threat hunting exercises and Splunk SPL challenges',
            'Operationalized threat intelligence through integration of Anomali ThreatStream and SiloBreaker platforms',
            'Designed real-time monitoring solutions for critical vulnerabilities, including a specialized Log4j monitoring dashboard'
          ]
        }
      ]
    },
    {
      company: 'LOCKHEED MARTIN',
      location: 'Columbus, OH',
      positions: [
        {
          title: 'Senior Cyber Intel Analyst',
          period: 'March 2019 - October 2021',
          responsibilities: [
            'Served as Defensive Cyber Operations Transformation Liaison for DISA Cyber Security Services',
            'Architected and implemented advanced Splunk ATT&CK Threat Hunting dashboard with custom detection logic mapped to adversarial TTPs',
            'Engineered and deployed over 160 high-fidelity SIEM analytics across Windows, Linux, and SaaS environments',
            'Conducted comprehensive security capability assessments against Office365, on-premises datacenter, and cloud environments using MITRE ATT&CK Framework',
            'Developed specialized Splunk search capabilities for WAF authentication traffic, eliminating 200,000+ false positives and saving 33,000+ analyst hours',
            'Designed and implemented structured frameworks for cyber threat hunting operations, significantly enhancing analytical capabilities',
            'Selected to lead training programs for new analysts on Splunk fundamentals, SPL, dashboarding, and advanced hunting methodologies'
          ]
        }
      ]
    },
    {
      company: 'NORTHROP GRUMMAN',
      location: 'Columbus, OH',
      positions: [
        {
          title: 'Cyber Systems Administrator',
          period: 'September 2017 - March 2019',
          responsibilities: [
            'Served as assistant site lead for Columbus location',
            'Led deployment of enterprise security software in layered virtual environments',
            'Managed endpoint security across Windows 10, Server 2012/2008 R2, and Red Hat Enterprise Linux systems',
            'Designed custom queries and dashboards for threat monitoring across three secure networks',
            'Successfully provisioned and configured ePolicy Orchestrator servers using VMware vCenter',
            'Provided critical support during network infrastructure outages and replacement initiatives'
          ]
        }
      ]
    },
    {
      company: 'NORTHROP GRUMMAN',
      location: 'Fairmont, WV',
      positions: [
        {
          title: 'Cyber Systems Administrator',
          period: 'September 2016 - September 2017',
          responsibilities: [
            'Administered McAfee ePolicy Orchestrator and served on the Incident Response Team',
            'Managed endpoint security and intrusion prevention for 900+ systems across eight virtual operating environments',
            'Maintained 98% resource availability while ensuring security compliance',
            'Developed stored procedures to improve software deployment efficiency',
            'Performed STIG compliance monitoring and remediation'
          ]
        }
      ]
    },
    {
      company: 'UNITED STATES MARINE CORPS',
      location: 'Cherry Point, NC • Afghanistan • Okinawa, Japan',
      positions: [
        {
          title: 'Data Networking Specialist',
          period: 'February 2009 - February 2014',
          responsibilities: [
            'Led incident response and vulnerability mitigation across three secure networks',
            'Selected to develop Afghanistan network operations from the ground up',
            'Developed innovative WLAN solution for helicopter and control center communication'
          ]
        }
      ]
    }
  ];

  return (
    <section className="section experience-section">
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
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        PROFESSIONAL EXPERIENCE
      </h2>

      <div className="jobs-container">
        {jobs.map((job, index) => {
          const jobKey = job.company.replace(/\s+/g, '_');
          const isExpanded = expandedJobs[jobKey] ?? false; // Use fallback if key doesn't exist
          
          return (
            <div key={index} className="job-item">
              <div 
                className="job-header" 
                onClick={() => toggleJobExpansion(jobKey)}
              >
                <div className="job-title-container">
                  <h3 className="job-company">{job.company}</h3>
                  <p className="job-location">{job.location}</p>
                </div>
                <div className="expand-icon">
                  {isExpanded ? '−' : '+'}
                </div>
              </div>

              {isExpanded && (
                <div className="job-details">
                  {job.positions.map((position, posIndex) => (
                    <div key={posIndex} className="position-item">
                      <div className="position-header">
                        <h4 className="position-title">{position.title}</h4>
                        <span className="position-period">{position.period}</span>
                      </div>
                      <ul className="responsibilities-list">
                        {position.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;