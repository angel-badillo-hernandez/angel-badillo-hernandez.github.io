import React from 'react';
import './SkillBubble.css';

interface SkillBubbleProps {
  skill: string;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill }) => {
  return <div className="skill-bubble">{skill}</div>;
};

export default SkillBubble;
