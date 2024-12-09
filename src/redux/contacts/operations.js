import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { taskAPI } from "../auth/operations";




export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await taskAPI.get('/contacts');
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const response = await taskAPI.delete(`/contacts/${id}`);
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const response = await taskAPI.post(`/contacts`, body);
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})