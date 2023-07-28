import axios from 'axios';
import { setAuthHeader } from '../redux/auth/auth-operations'; // Импортируем функцию для установки заголовка

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Функция для установки токена в заголовок перед отправкой запроса
const setAuthHeaderForRequest = () => {
  const token = localStorage.getItem('token'); // Получаем токен из localStorage (предполагая, что вы его туда сохраняете после успешной аутентификации)
  if (token) {
    setAuthHeader(token); // Устанавливаем токен в заголовок
  }
};

export const getContacts = async () => {
  try {
    setAuthHeaderForRequest(); // Вызываем функцию для установки заголовка перед запросом
    const response = await axios.get('/contacts'); // Используем axios для отправки GET-запроса
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addContact = async contact => {
  try {
    console.log(contact);
    const response = await axios.post('/contacts', contact); // Используем axios для отправки POST-запроса
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteContact = async contactId => {
  try {
    setAuthHeaderForRequest(); // Вызываем функцию для установки заголовка перед запросом
    const response = await axios.delete(`/contacts/${contactId}`); // Используем axios для отправки DELETE-запроса
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
