export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.items = [...state.items, payload];
};

export const handleFulfilledDel = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const deleteContactSuccess = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload);
};
