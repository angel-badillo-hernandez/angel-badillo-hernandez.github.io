import React from 'react';
import './ProjectCard.css'; // Import ProjectCard styles

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string; // Add link prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, link }) => {
  return (
    <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} />
      <h2 className="project-card-title">{title}</h2>
      <p className="project-card-description">{description}</p>
    </a>
  );
};

export default ProjectCard;
