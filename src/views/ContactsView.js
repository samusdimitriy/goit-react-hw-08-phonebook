import React from 'react';
import { Flex } from '@chakra-ui/react';
import FormContact from 'components/FormContact/FormContact';
import Contacts from 'components/Contacts/Contacts';

const ContactsView = () => {
  return (
    <Flex justifyContent="space-between">
      <FormContact />
      <Contacts />
    </Flex>
  );
};

export default ContactsView;
