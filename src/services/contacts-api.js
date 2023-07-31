import axios from 'axios';
import { setAuthHeader } from '../redux/auth/auth-operations';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeaderForRequest = () => {
  const token = localStorage.getItem('token');
  if (token) {
    setAuthHeader(token);
  }
};

export const getContacts = async () => {
  try {
    setAuthHeaderForRequest();
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addContact = async contact => {
  try {
    console.log(contact);
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteContact = async contactId => {
  try {
    setAuthHeaderForRequest();
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
