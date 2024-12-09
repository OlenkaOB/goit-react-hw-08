import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filters/slice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    },
});