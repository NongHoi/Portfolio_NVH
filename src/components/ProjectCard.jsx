import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div className="project-card" variants={itemVariants} whileHover={{ y: -5 }}>
      <div className="card-thumbnail">
        <img src={project.thumbnail || 'https://via.placeholder.com/400x250'} alt={project.name} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{project.name}</h3>
          <div className="card-links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.name}`}>
              <Github size={20} />
            </a>
            {project.demoLink ? (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.name}`}>
                <ExternalLink size={20} />
              </a>
            ) : (
              <span className="link-disabled" title="Chưa triển khai">
                <ExternalLink size={20} />
              </span>
            )}
          </div>
        </div>
        <p className="card-description">{project.description}</p>
        <div className="card-footer">
          <div className="card-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
