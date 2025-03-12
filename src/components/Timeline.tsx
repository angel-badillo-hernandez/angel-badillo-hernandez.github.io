import React from 'react';
import './Timeline.css'; // Import the new CSS file

interface TimelineProps {
  children: React.ReactNode;
}

/**
 * Timeline component to display a list of timeline items.
 * @param {TimelineProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 */
const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return <div className="timeline">{children}</div>;
};

export default Timeline;
