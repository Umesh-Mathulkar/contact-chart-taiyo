// Importing necessary libraries and components
import React, { useState } from 'react';
import ContactForm from './contactForm'; 
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/actions/contactActions';
import Toast from '../../components/ui/toast';
import DialogBox from '../../components/ui/dialog';
import { FaPlus } from 'react-icons/fa';

// AddContact component
const AddContact: React.FC = () => {
    // Initialize dispatch from Redux
    const dispatch = useDispatch();

    // State to manage toast message and dialog box open state
    const [toastMessage, setToastMessage] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to handle contact submission
    const handleAddContactSubmit = (values: any, { resetForm }: any) => {
        // Capitalize the first letter of first and last names
        values.firstName = values.firstName.charAt(0).toUpperCase() + values.firstName.slice(1);
        values.lastName = values.lastName.charAt(0).toUpperCase() + values.lastName.slice(1);

        // Dispatch the addContact action with the new contact data
        dispatch(addContact(values));

        // Reset the form and show success toast message
        resetForm();
        setToastMessage('Contact added successfully!');
        setIsDialogOpen(false); // Close the dialog
    };

    // Function to open the dialog
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    // Function to close the dialog
    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    // Initial values for the contact form
    const initialValues = {
        id:'',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        status: 'active',
    };

    // Render the component
    return (
        <div>
            {/* Button to open the dialog */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 " onClick={openDialog}>
                <div className='flex gap-2' > Create Contact  <FaPlus/> </div>
            </button>

            {/* Dialog box for adding a contact */}
            <DialogBox isOpen={isDialogOpen} handleClose={closeDialog} handleCancel={closeDialog}>
                <ContactForm type="new" handleOnSubmit={handleAddContactSubmit} initialValues={initialValues} />
            </DialogBox>

            {/* Show success toast message if available */}
            {toastMessage && <Toast message={toastMessage} type='success' duration={3000} />}
        </div>
    );
};

export default AddContact;
