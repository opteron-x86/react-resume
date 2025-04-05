// Auth types
export interface AuthUser {
    username: string;
    attributes: {
      email: string;
      email_verified: boolean;
      sub: string;
    };
    signInUserSession: {
      accessToken: {
        payload: {
          'cognito:groups'?: string[];
        };
      };
    };
  }
  
  // Job and Experience types
  export interface Position {
    title: string;
    period: string;
    responsibilities: string[];
  }
  
  export interface Job {
    company: string;
    location: string;
    positions: Position[];
  }
  
  // Project types
  export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    detail?: string;
  }
  
  // Certification types
  export interface Certification {
    id: string;
    name: string;
    issuer: string;
    logo: string;
    featured?: boolean;
  }
  
  // Education types
  export interface EducationItem {
    degree: string;
    school: string;
    year: string;
    inProgress?: boolean;
  }
  
  // Contact form types
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  export interface ContactFormErrors {
    name?: string;
    email?: string;
    message?: string;
  }