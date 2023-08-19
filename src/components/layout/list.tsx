import React from 'react';
import { Link } from 'react-router-dom'

// Props interface for the SidebarList component
interface SidebarListProps {
  onNavLinkClick: () => void; // Function to handle navigation link clicks
}

// SidebarList component
const SidebarList: React.FC<SidebarListProps> = ({ onNavLinkClick }) => {
  // Array of navigation items with labels and links
  const navigationItems = [
    { label: 'Contact', link: '/' },
    { label: 'Charts and Maps', link: '/chart-map' },
  ];

  return (
    <nav>
      <ul>
        {/* Mapping through navigation items */}
        {navigationItems.map((item, index) => (
          <li key={index}>
            {/* Navigation link */}
            <Link
              to={item.link}
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={onNavLinkClick} // Call the provided click handler when the link is clicked
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarList;
