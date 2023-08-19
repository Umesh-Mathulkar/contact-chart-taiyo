import React from 'react';

// Props interface for the Card component
interface CardProps {
  title: string; // Title of the card
  children: React.ReactNode; // Content to be displayed within the card
}

// Card component
const Card: React.FC<CardProps> = ({ title, children }) => {
  // Capitalize the title for consistent formatting
  const capitalizedTitle = title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return (
    <div className="w-full p-2">
      {/* Card title */}
      <div className="font-bold  text-xl mb-2">{capitalizedTitle}</div>
      
      {/* Card content */}
      <div className="rounded overflow-hidden shadow-sm border border-gray-200">
        <div className="px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
