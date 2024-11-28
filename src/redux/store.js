import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filtersSlice';


const persistConfig = {
    key: 'contact',
    version: 1,
    storage,
};
const persistConfigContacts = {
    key: 'name',
    version: 1,
    storage,
    blacklist: ['filter'],
};


const persistedContactsReducer = persistReducer(persistConfigContacts, contactReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);