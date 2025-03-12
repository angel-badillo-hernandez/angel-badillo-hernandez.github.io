import React, { JSX } from 'react';
import './TimelineItem.css'; // Import the new CSS file

interface TimelineItemProps {
  position: 'left' | 'right';
  duration: string;
  title: string;
  subtitle: string;
  location: string;
  description: string | JSX.Element;
}

/**
 * Timeline item component.
 * @param {TimelineItemProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 */
const TimelineItem: React.FC<TimelineItemProps> = ({ position, duration, title, subtitle, location, description }: TimelineItemProps): JSX.Element => {
  return (
    <div className={`timeline-item ${position}`}>
      <div className="timeline-item-content">
        <div className='duration'>{duration}</div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p className="location">{location}</p>
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
