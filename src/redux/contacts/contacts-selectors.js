import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getFilter = state => state.filter.filter;

const getAllContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const contactsSelectors = {
  getLoading,
  getError,
  getFilter,
  getVisibleContacts,
  getAllContacts,
};
export default contactsSelectors;
