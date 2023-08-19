import React, { useState } from 'react';
import Sidebar from './sidebar';
import TopBar from './topBar';
import MainContent from './mainContent';

// Props interface for the Layout component
interface LayoutProps {
  children: React.ReactNode; // The content to be displayed within the layout
}

// Layout component
const Layout: React.FC<LayoutProps> = ({ children }) => {
  // State to manage the sidebar open/closed status
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar's open/closed status
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle navigation link clicks and close the sidebar
  const handleNavLinkClick = () => {
    setIsSidebarOpen(false); 
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 z-10`}>
        <Sidebar isSidebarOpen={isSidebarOpen} onNavLinkClick={handleNavLinkClick} />
      </div>
      
      {/* Main content area */}
      <div className={`flex-grow transition-all`}>
        {/* Top bar with toggle button */}
        <TopBar onToggleSidebar={toggleSidebar} />
        
        {/* Main content with dynamic styling based on sidebar status */}
        <div className={` ${isSidebarOpen && 'hidden md:block'}`}>
          <MainContent className={`${isSidebarOpen &&'pl-[300px]'}`}>{children}</MainContent>
        </div>
      </div>
    </div>
  );
};

export default Layout;
