
import React from 'react';

const NoContactsMessage: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <p className="text-gray-500">
        No contacts present. Please add contacts from the create contact button.
      </p>
    </div>
  );
};

export default NoContactsMessage;
