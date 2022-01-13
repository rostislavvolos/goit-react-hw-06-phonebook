import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('phonebook/addContact', contact => ({
  payload: {
    ...contact,
    id: shortid.generate(),
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const filterContacts = createAction('phonebook/filterContacts');

export { addContact, deleteContact, filterContacts };