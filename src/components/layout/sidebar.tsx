import React from 'react';
import SidebarList from './list';
import { APP_NAME } from '../../constants/app.constant';

// Props interface for the Sidebar component
interface SidebarProps {
    isSidebarOpen: boolean; // Controls whether the sidebar is open or not
    onNavLinkClick: () => void; // Function to handle navigation link clicks
}

// Sidebar component
const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, onNavLinkClick }) => {
    return (
        <div className={`bg-gray-800 w-64 h-screen ${isSidebarOpen ? '' : 'hidden'}`}>
            <div className="bg-gray-800 w-64 h-screen">
                {/* Top section with app name */}
                <div className="flex items-center justify-center h-16 bg-gray-700">
                    <span className="text-white text-lg font-semibold">{APP_NAME}</span>
                </div>
                {/* Sidebar navigation list */}
                <SidebarList onNavLinkClick={onNavLinkClick} />
            </div>
        </div>
    );
};

export default Sidebar;
