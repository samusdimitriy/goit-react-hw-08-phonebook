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
import { useEffect } from 'react';

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
      {error && <h1>Something went wrong...</h1>}
      {loading ? (
        <p>Your Phonebook is empty. Please add a contact.</p>
      ) : (
        <>
          <Filter />
          <StyledContactsContainer>
            <StyledContactsList>
              {contacts.map(contact => (
                <StyledContactItem key={contact.id}>
                  <StyledContactName>{contact.name}:</StyledContactName>
                  <StyledContactNumber>{contact.number}</StyledContactNumber>
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
      )}
    </>
  );
};

export default Contacts;
