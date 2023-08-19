// Action types
export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Contact interface
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// Action creator: Add a new contact
export const addContact = (contact: Contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

// Action creator: Edit an existing contact
export const editContact = (contact: Contact) => ({
  type: EDIT_CONTACT,
  payload: contact,
});

// Action creator: Delete a contact
export const deleteContact = (contactId: string) => ({
  type: DELETE_CONTACT,
  payload: contactId,
});
