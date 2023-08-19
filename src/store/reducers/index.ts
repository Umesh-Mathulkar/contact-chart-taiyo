// Importing necessary function and reducers
import { combineReducers } from 'redux';
import contactsReducer, { ContactsState } from './contactReducer';

// Defining the root state interface
export interface RootState {
  contacts: ContactsState; // The state managed by the contactsReducer
}

// Combining reducers using combineReducers
const rootReducer = combineReducers<RootState>({
  contacts: contactsReducer, // Combine the contactsReducer under the 'contacts' key
});

export default rootReducer;
