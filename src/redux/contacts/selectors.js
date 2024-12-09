import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const salectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectFindContscts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
);