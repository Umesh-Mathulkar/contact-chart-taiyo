
import React from 'react';
import Card from '../../components/ui/card';

const NoContactsMessage: React.FC = () => {
  return (
    <Card title='' >
    <div className="text-center mt-4">
      <p className="text-gray-500">
        No contacts present. Please add contacts from the create contact button.
      </p>
    </div>
    </Card>
  );
};

export default NoContactsMessage;
