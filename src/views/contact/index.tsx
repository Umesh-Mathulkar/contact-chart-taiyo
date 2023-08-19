// ContactsList.tsx

import React from 'react';
import ContactItems from './contactList';
import NoContactsMessage from './noContact'; // Import the component
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';
import AddContact from './addContact';

const Contact: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);

    return (
        <div>
            {/* Header with title and AddContact button */}
            <div className='flex gap-4'>
                <h1 className="text-2xl font-semibold mb-4">Contacts List</h1>
                <div>
                    <AddContact />
                </div>
            </div>
            
            {/* Conditional rendering based on the number of contacts */}
            {contacts.length === 0 ? (
                // Display the NoContactsMessage component when no contacts are available
                <NoContactsMessage />
            ) : (
                // Display the ContactItems component when contacts are available
                <ContactItems />
            )}
        </div>
    );
};

export default Contact;
