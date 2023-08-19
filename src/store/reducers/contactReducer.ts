// Importing necessary action types and external libraries
import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "../actions/contactActions";
import { v4 as uuidv4 } from 'uuid';

// Defining the Contact interface with additional 'status' property
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string; // Status of the contact, for example, 'active', 'inactive', etc.
}

// Action interfaces for adding, editing, and deleting contacts
interface AddContactAction {
  type: typeof ADD_CONTACT;
  payload: Contact;
}
interface EditContactAction {
  type: typeof EDIT_CONTACT;
  payload: Contact;
}
interface DeleteContactAction {
  type: typeof DELETE_CONTACT;
  payload: string; // Contact ID to be deleted
}

// State interface for the Contacts reducer
export interface ContactsState {
  contacts: Contact[];
}

// Combining all action types into a single union type
type ContactAction = AddContactAction | EditContactAction | DeleteContactAction;

// Initial state for the Contacts reducer
const initialState: ContactsState = {
  contacts: [],
};

// Contacts reducer function
const contactsReducer = (state = initialState, action: ContactAction) => {
  switch (action.type) {
    case ADD_CONTACT:
      // Create a new contact with a generated UUID
      const newContact = {
        ...action.payload,
        id: uuidv4(),
      };
      return {
        ...state,
        contacts: [...state.contacts, newContact],
      };
    case EDIT_CONTACT:
      // Update existing contacts while keeping other contacts unchanged
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    case DELETE_CONTACT:
      // Filter out the contact to be deleted
      const deletedContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: deletedContacts,
      };
    default:
      return state;
  }
};

export default contactsReducer;
