import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

// GET @ /tasks
const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/tasks');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

// POST @ /tasks
const addTodo = description => dispatch => {
  const todo = {
    description,
    completed: false,
  };

  dispatch(addContactRequest());

  axios
    .post('/tasks', todo)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

// DELETE @ /tasks/:id
const deleteTodo = todoId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/tasks/${todoId}`)
    .then(() => dispatch(deleteContactSuccess(todoId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

// PATCH @ /tasks/:id
// const toggleCompleted =
//   ({ id, completed }) =>
//   dispatch => {
//     const update = { completed };

//     dispatch(toggleCompletedRequest());

//     axios
//       .patch(`/tasks/${id}`, update)
//       .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//       .catch(error => dispatch(toggleCompletedError(error.message)));
//   };

const contactsOperations = {
  fetchContacts,
  addTodo,
  deleteTodo,
  //   toggleCompleted,
};
export default contactsOperations;
