import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const taskAPI = axios.create({
    baseURL: 'https://connections-api.goit.global/',
});
const setAuthHeader = token => {
    taskAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    taskAPI.defaults.headers.common.Authorization = ``;
};


export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const response = await taskAPI.post('users/signup', credentials);
        setAuthHeader(response.data.token);
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await taskAPI.post('users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await taskAPI.post('users/logout');
        clearAuthHeader();

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {

    const savedToken = thunkAPI.getState().auth.token;
    console.log(savedToken);

    if (!savedToken) {
        return thunkAPI.rejectWithValue('Token is not exist!')
    }
    try {
        setAuthHeader(savedToken);
        const { data } = await taskAPI.get('users/current');
        return data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});