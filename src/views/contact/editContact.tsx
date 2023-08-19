import React, { useState } from 'react';
import ContactForm from './contactForm';
import { useDispatch } from 'react-redux';
import { editContact } from '../../store/actions/contactActions'; 
import Toast from '../../components/ui/toast';
import DialogBox from '../../components/ui/dialog';
import { FaEdit } from 'react-icons/fa';

interface EditContactProps {
    contactDetails: any; // Contact details passed as props
}

const EditContact: React.FC<EditContactProps> = ({ contactDetails }) => {
    const dispatch = useDispatch();
    const [toastMessage, setToastMessage] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to handle the edit contact form submission
    const handleEditContactSubmit = (values: any, { resetForm }: any) => {
        // Dispatch the editContact action with updated values and the contact's id
        dispatch(editContact({ id: contactDetails.id, ...values }));
        resetForm();
        setToastMessage('Contact updated successfully!');
        setIsDialogOpen(false)
    };

    // Function to open the edit dialog
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    // Function to close the edit dialog
    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    // Set initial values based on contact details
    const initialValues = {
        firstName: contactDetails?.firstName,
        lastName: contactDetails?.lastName,
        email: contactDetails?.email,
        phone: contactDetails?.phone,
        status: contactDetails?.status,
    };

    return (
        <div>
            {/* Button to open the edit dialog */}
            <button className="text-blue-600 hover:text-blue-900 mr-5" onClick={openDialog}>
                <FaEdit />
            </button>

            {/* Edit contact dialog */}
            <DialogBox isOpen={isDialogOpen} handleClose={closeDialog} handleCancel={closeDialog}>
                <ContactForm type="edit" handleOnSubmit={handleEditContactSubmit} initialValues={initialValues} />
            </DialogBox>
            {/* Display a toast message when the contact is updated */}
            {toastMessage && <Toast message={toastMessage} type="success" duration={3000} />}
        </div>
    );
};

export default EditContact;
