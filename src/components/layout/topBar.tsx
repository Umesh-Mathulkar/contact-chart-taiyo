import React from 'react';

// Props interface for the TopBar component
interface TopBarProps {
  onToggleSidebar: () => void; // Function to toggle the sidebar
}

// TopBar component
const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center">
      {/* Sidebar toggle button */}
      <button onClick={onToggleSidebar} className="text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      
      {/* User information */}
      <div className="flex items-center">
      
        
        {/* User name */}
        <span className="text-gray-800 font-semibold">Umesh Mathulkar</span>
      </div>
    </div>
  );
};

export default TopBar;
