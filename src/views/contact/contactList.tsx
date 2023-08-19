import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

import EditContact from './editContact';
import ViewContact from './viewContact';
import { deleteContact } from '../../store/actions/contactActions';
import Toast from '../../components/ui/toast';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [selectedContact, setSelectedContact] = useState<any | null>(null);
  const dispatch = useDispatch();
  const [toastMessage, setToastMessage] = useState('');
  
  const openContactDetails = (contact: any) => {
    setSelectedContact(contact);
  };

  const handleDeleteClick = (contactId: string) => {
    dispatch(deleteContact(contactId));
    setToastMessage('Contact deleted');
  };
console.log(contacts)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
            <th className="hidden md:table-cell px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Email
            </th>
            <th className="hidden md:table-cell px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Phone
            </th>
            <th className="hidden md:table-cell px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {contacts.map((contact,index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {contact.firstName} {contact.lastName}
              </td>
              <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">{contact.email}</td>
              <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">{contact.phone}</td>
              <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded ${
                    contact.status === 'active' ? 'bg-emerald-200 text-emerald-800' : 'bg-red-200 text-red-800'
                  }`}
                >
                  {contact.status}
                </span>
              </td>
              <td className="flex items-center space-x-2 px-6 py-4 whitespace-nowrap">
              <div onClick={() => openContactDetails(contact)} >
                  <ViewContact contactDetails={selectedContact} />
                </div>
                <div onClick={() => openContactDetails(contact)}>
                  <EditContact contactDetails={selectedContact} />
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {toastMessage && <Toast message={toastMessage} type='warning' duration={3000} />}
    </div>
  );
};

export default ContactList;
