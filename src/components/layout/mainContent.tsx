import React from 'react';

// Props interface for the MainContent component
interface MainContentProps {
    children: React.ReactNode; // Content to be displayed within the MainContent
    className: any; // Additional CSS class name for styling
}

// MainContent component
const MainContent: React.FC<MainContentProps> = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export default MainContent;
