import React from 'react';
import { FaAddressBook, FaChartBar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// Props interface for the SidebarList component
interface SidebarListProps {
  onNavLinkClick: () => void; // Function to handle navigation link clicks
}

// SidebarList component
const SidebarList: React.FC<SidebarListProps> = ({ onNavLinkClick }) => {
  // Array of navigation items with labels and links
  const navigationItems = [
    { label: 'Contact', link: '/', icon: <FaAddressBook /> },
    { label: 'Charts and Maps', link: '/chart-map', icon: <FaChartBar /> },
  ];

  return (
    <nav>
      <ul>
        {/* Mapping through navigation items */}
        {navigationItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center px-4 py-2 text-white bg-gray-700 text-[20px] my-3'
                  : 'flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white text-[20px] my-3'
              }
              onClick={onNavLinkClick}
            >
              {item.icon} {/* Icon component */}
              <span className="ml-2">{item.label}</span>
            </NavLink>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarList;
