import React from 'react';

// Props interface for the Loading component
interface LoadingProps {
  children: React.ReactNode; // Content to be displayed when not loading
  isLoading: boolean; // Indicates whether loading is in progress
}

// Loading component
const Loading: React.FC<LoadingProps> = ({ children, isLoading }) => {
  return (
    <>
      {/* Display loading spinner if isLoading is true */}
      {isLoading ? (
        <div className='flex justify-center items-center h-full'>
          <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-400'></div>
        </div>
      ) : (
        // Display children if isLoading is false
        children
      )}
    </>
  );
};

export default Loading;
