import { Download, Mail } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const contact = [
    { label: 'Email', value: 'nonghoi2004@gmail.com' },
    { label: 'Phone', value: '0329******' },
    { label: 'Location', value: 'Binh Thanh, HCM' },
  ];

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Riic Wedding Planner Company',
      date: '10/2022 - 12/2025',
      description:
        'Developed a company introduction website to showcase information and completedprojects using WordPress. Website: riicweddingplanner.com',
    },
  
  ];

  const educations = [
    {
      degree: 'Software Engineering',
      institution: 'Hutech University',
      date: '2022 - Present',
    },
    {
      degree: 'GPA',
      institution: '3.09/4.0',
      date: '2026',
    },
  ];

  return (
    <div className="resume-container">
      <section className="resume-header fade-in-down">
        <h1>Resume</h1>
        <p>Comprehensive overview of my professional experience, education, and contact information.</p>
        <a href="src/assets/Cv/Nong-Vay-Hoi-Cv-Intern.pdf" download className="btn-download">
          <Download size={20} />
          Download PDF
        </a>
      </section>

      <section className="contact-info fade-in-up">
        {contact.map((item, index) => (
          <div className="contact-card slide-up" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <Mail size={20} />
            <div>
              <p className="contact-label">{item.label}</p>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="experience-section fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item slide-up" key={index} style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2>Education</h2>
        <div className="education-list">
          {educations.map((edu, index) => (
            <div className="education-item slide-up" key={index} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <h3>{edu.degree}</h3>
              <p className="education-institution">
                {edu.institution}
                <span className="education-date">{edu.date}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
