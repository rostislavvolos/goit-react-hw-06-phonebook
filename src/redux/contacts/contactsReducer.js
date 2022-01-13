import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from '../contacts/contactsAction';


const baseContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];



const itemsReducer = createReducer(baseContacts, {
  [addContact]: (state, {payload}) => [...state, payload],
  [deleteContact]: (state, {payload}) => state.filter(({id}) => id !== payload)
})

const filtReducer = createReducer('', {
  [filterContacts]: (state, { payload }) => payload,
  
})


 const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filtReducer,
});

export default contactsReducer