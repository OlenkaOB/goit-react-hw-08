import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const salectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContscts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, newName) => {
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(newName) || contact.number.includes(newName)
        });
    }
);
