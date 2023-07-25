import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contacts-thunk';
import {
  handleFulfilledAdd,
  handleFulfilledDel,
  handleFulfilledGet,
  handlePending,
  handleRejected,
  handleFulfilled,
  deleteContactSuccess,
} from 'services/function-slice';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [getContactsThunk, addContactThunk, deleteContactThunk];

const typeOfThunks = type => arrThunks.map(thunk => thunk[type]);

const initialState = { items: [], isLoading: false, error: null };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        handleFulfilledDel(state, action);
        deleteContactSuccess(state, action);
      })
      .addMatcher(isAnyOf(...typeOfThunks(PENDING)), handlePending)
      .addMatcher(isAnyOf(...typeOfThunks(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...typeOfThunks(REJECTED)), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { actions } = contactsSlice;
