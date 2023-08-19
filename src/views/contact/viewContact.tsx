import React, { useState } from 'react';
import ContactForm from './contactForm'; 
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/actions/contactActions';
import Toast from '../../components/ui/toast';
import DialogBox from '../../components/ui/dialog';
import { FaEdit, FaEye } from 'react-icons/fa';

interface EditContactProps {
    contactDetails: any; 
}

const ViewContact: React.FC<EditContactProps> = ({ contactDetails }) => {
    const dispatch = useDispatch();
    const [toastMessage, setToastMessage] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleAddContactSubmit = (values: any, { resetForm }: any) => {

        values.firstName = values.firstName.charAt(0).toUpperCase() + values.firstName.slice(1);
        values.lastName = values.lastName.charAt(0).toUpperCase() + values.lastName.slice(1);

        dispatch(addContact(values));
        resetForm();
        setToastMessage('Contact added successfully!');

    };


    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    const initialValues = {
        firstName: contactDetails?.firstName,
        lastName: contactDetails?.lastName,
        email: contactDetails?.email,
        phone: contactDetails?.phone,
        status: contactDetails?.status,
    };


    return (
        <div>
            <button className="text-blue-600 hover:text-blue-900 mr-5" onClick={openDialog}> <FaEye /></button>

            <DialogBox isOpen={isDialogOpen} handleClose={closeDialog} handleCancel={closeDialog}>
                <ContactForm type="view" handleOnSubmit={handleAddContactSubmit} initialValues={initialValues} />
            </DialogBox>
            {toastMessage && <Toast message={toastMessage} type='success' duration={3000} />}
        </div>
    );
};

export default ViewContact;
