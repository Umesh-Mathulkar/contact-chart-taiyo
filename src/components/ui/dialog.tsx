import React, { ReactNode } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';

// Props interface for the DialogBox component
interface DialogBoxProps {
  isOpen: boolean; // Indicates whether the dialog box is open or not
  handleClose: () => void; // Function to handle closing the dialog box
  handleCancel: () => void; // Function to handle canceling the dialog box
  children: ReactNode; // Content to be displayed within the dialog box
}

// DialogBox component
const DialogBox: React.FC<DialogBoxProps> = ({ isOpen, handleClose, handleCancel, children }) => {
  // If the dialog box is not open, return null
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleClose}
        >
          <FaRegWindowClose/>
        </button>
        
        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default DialogBox;
