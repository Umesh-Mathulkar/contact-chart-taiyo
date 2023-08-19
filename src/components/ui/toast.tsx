import React, { useState, useEffect } from 'react';

// Props interface for the Toast component
interface ToastProps {
  message: string; // Message to display in the toast
  type: 'success' | 'error'; // Type of toast, either 'success' or 'error'
  duration?: number; // Optional duration for which the toast should be visible
}

// Toast component
const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  // State to control toast visibility
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the toast after the specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // Clear the timer when the component unmounts or duration changes
    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  // If the toast is not visible, return null
  if (!isVisible) {
    return null;
  }

  // Classes and icon based on the toast type
  const toastClasses = `fixed top-5 right-5 p-3 rounded-lg shadow-lg ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  } text-white`;

  const toastIcon = type === 'success' ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  // Render the toast
  return (
    <div className={toastClasses}>
      <div className="flex items-center">
        {toastIcon}
        <h3 className="text-lg font-semibold">
          {type === 'success' ? 'Success' : 'Error'}
        </h3>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
