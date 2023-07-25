import React, { useEffect } from 'react';
import {
  StyledContactsContainer,
  StyledContactItem,
  StyledContactName,
  StyledContactNumber,
  StyledDeleteButton,
  StyledContactsHeading,
  StyledContactsList,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
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
    <>
      <StyledContactsHeading>Contacts</StyledContactsHeading>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong...</h1>}
      {contacts.length > 0 ? (
        <>
          <Filter />
          <StyledContactsContainer>
            <StyledContactsList>
              {contacts.map(contact => (
                <StyledContactItem key={contact.id}>
                  <StyledContactName>{contact.name}:</StyledContactName>
                  <StyledContactNumber>{contact.phone}</StyledContactNumber>
                  <StyledDeleteButton
                    type="button"
                    onClick={() => handleDeleteContact(contact.id)}
                  >
                    Delete
                  </StyledDeleteButton>
                </StyledContactItem>
              ))}
            </StyledContactsList>
          </StyledContactsContainer>
        </>
      ) : (
        <p>Your Phonebook is empty. Please add a contact.</p>
      )}
    </>
  );
};

export default Contacts;
