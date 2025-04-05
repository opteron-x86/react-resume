import { useState } from "react";
import './App.css';
import { useVisitorTracking } from './hooks/useVisitorTracking';
import {
  Header,
  Summary,
  Experience,
  Skills,
  Projects,
  Education,
  Certifications,
  Footer,
  ContactForm
} from './components';

// Define theme colors
const themeColors = {
  primary: '#1a4b77',
  secondary: '#2c7da0',
  accent: '#a9d6e5',
  textColor: '#2c3e50',
  lightText: '#58738b',
  background: '#ffffff',
  sectionBg: '#f8f9fa',
  borderColor: '#e9ecef',
};

function App() {
  useVisitorTracking();
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  
  return (
    <div className="app-container" style={{ backgroundColor: themeColors.background }}>
      <div className="resume-container">
        <Header
          onContactClick={() => setShowContactForm(true)}
        />
        <main className="resume-content">
          <Summary />
          <Skills />
          <Experience />
          <Projects />
          <div className="two-column-section">
            <Certifications />
            <Education />
          </div>
        </main>
        <Footer />
      </div>
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
}

export default App;