import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, getContacts } from 'services/contacts-api';

export const getContactsThunk = createAsyncThunk('contacts/getContacts', () =>
  getContacts()
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteContact(id);
    return id;
  }
);
