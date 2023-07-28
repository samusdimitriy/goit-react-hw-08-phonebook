import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContactThunk } from 'redux/contacts/contacts-thunk';
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import contactsSelectors from 'redux/contacts/contacts-selectors';

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const isContactExist = contacts?.find(
      contact =>
        contact.name.toLowerCase() === e.target.name.value.toLowerCase()
    );
    if (isContactExist) {
      Notiflix.Notify.failure(
        `Contact "${e.target.name.value}" is already in contacts`
      );
      e.target.reset();
      return;
    }

    const newContact = {
      name: e.target.name.value,
      number: e.target.number.value,
    };

    dispatch(addContactThunk(newContact))
      .then(response => {
        Notiflix.Notify.success('Contact added');
        e.target.reset();
      })
      .catch(error => {
        Notiflix.Notify.failure('Failed to add contact: ' + error.message);
      });
  };

  return (
    <Box width="50%" p={8} bg="white" boxShadow="md">
      <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
        Phonebook
      </Text>

      <form onSubmit={handleSubmit}>
        <FormControl mb={3}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
        </FormControl>

        <FormControl mb={3}>
          <FormLabel>Number</FormLabel>
          <Input
            type="tel"
            name="number"
            pattern="[+]?[\d\s.-]{1,30}"
            title="Phone number must be digits and can contain spaces, dashes, periods, and can start with +"
            required
            placeholder="Number"
            mb={8}
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" width="full">
          Add contact
        </Button>
      </form>
    </Box>
  );
};

export default FormContact;
