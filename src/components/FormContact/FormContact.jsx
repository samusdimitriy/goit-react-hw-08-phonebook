import { StyledInput, StyledButton, Title, Form } from './FormContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContactThunk } from 'redux/contacts/contacts-thunk';
import Contacts from 'components/Contacts/Contacts';
import { useState } from 'react';
import contactsSelectors from 'redux/contacts/contacts-selectors';

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    setName('');
    setNumber('');
    console.log(newContact);
    dispatch(addContactThunk(newContact))
      .then(response => {
        Notiflix.Notify.success('Contact added');
        e.target.reset();
      })
      .catch(error => {
        Notiflix.Notify.failure('Failed to add contact: ' + error.message);
      });
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Title>Phonebook</Title>

      <Form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          onChange={handleChange}
        />
        <StyledInput
          type="tel"
          name="number"
          pattern="[+]?[\d\s.-]{1,30}"
          title="Phone number must be digits and can contain spaces, dashes, periods, and can start with +"
          required
          placeholder="Number"
          onChange={handleChange}
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </Form>
      <Contacts />
    </>
  );
};

export default FormContact;
