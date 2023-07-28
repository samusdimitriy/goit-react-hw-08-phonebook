import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { Box, Text, Button } from '@chakra-ui/react';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/contacts-thunk';
import contactsSelectors from 'redux/contacts/contacts-selectors';

import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const loading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
    Notiflix.Notify.success(
      `Contact "${
        contacts.find(contact => contact.id === id).name
      }" successfully deleted`
    );
  };

  return (
    <Box width="50%" p={8} bg="white" boxShadow="md">
      <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        Contacts
      </Text>

      {error && <Text>Something went wrong...</Text>}
      {loading ? (
        <Text textAlign="center" fontSize="xl" color="gray.500" my={8}>
          Loading...
        </Text>
      ) : (
        <>
          {contacts.length === 0 ? (
            <Text textAlign="center" fontSize="xl" color="gray.500" my={8}>
              Your Phonebook is empty. Please add a contact.
            </Text>
          ) : (
            <>
              <Filter />
              <Box>
                {contacts.map(contact => (
                  <Box
                    key={contact.id}
                    borderWidth="1px"
                    borderRadius="md"
                    p={3}
                    mb={3}
                    display="flex"
                    alignItems="center"
                  >
                    <Text fontWeight="bold" mr={2}>
                      {contact.name}:
                    </Text>
                    <Text>{contact.number}</Text>
                    <Button
                      type="button"
                      ml="auto"
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default Contacts;
