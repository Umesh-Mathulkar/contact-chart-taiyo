import React, { ReactNode } from 'react';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default DialogBox;
