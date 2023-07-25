const BASE_URL = 'https://connections-api.herokuapp.com/';

export const getContacts = async () => {
  try {
    const data = await fetch(`${BASE_URL}/contacts`);
    const contacts = await data.json();
    return contacts;
  } catch (error) {
    throw new Error(error);
  }
};

export const addContact = async contact => {
  const data = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });
  return await data.json();
};

export const deleteContact = async contactId => {
  const data = await fetch(`${BASE_URL}/contacts/${contactId}`, {
    method: 'DELETE',
  });

  return await data.json();
};
