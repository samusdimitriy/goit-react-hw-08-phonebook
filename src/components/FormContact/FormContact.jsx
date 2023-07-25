import { StyledInput, StyledButton, Title, Form } from './FormContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContactThunk } from 'redux/contacts/contacts-thunk';
import Contacts from 'components/Contacts/Contacts';

const FormContact = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  const handleSubmit = e => {
    e.preventDefault();

    const isContactExist = items.find(
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
      phone: e.target.number.value,
    };

    dispatch(addContactThunk(newContact))
      .then(() => {
        Notiflix.Notify.success('Contact added');
        e.target.reset();
      })
      .catch(error => {
        Notiflix.Notify.failure('Failed to add contact: ' + error.message);
      });
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
        />
        <StyledInput
          type="tel"
          name="number"
          pattern="[+]?[\d\s.-]{1,30}"
          title="Phone number must be digits and can contain spaces, dashes, periods, and can start with +"
          required
          placeholder="Number"
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </Form>
      <Contacts />
    </>
  );
};

export default FormContact;
