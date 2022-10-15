export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectEmail = state => state.auth.user.email;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectName = state => state.auth.user.name;

export const getLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
export const getItems = state => state.contacts.contacts.items;
export const getFilter = state => state.contacts.filter;
