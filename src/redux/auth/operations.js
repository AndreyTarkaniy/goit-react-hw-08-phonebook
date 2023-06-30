import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeaders = token => {
  axios.defaults.headers.common.Authorization = `Berera ${token}`;
};

// const cleanAuthHeaders = () => {
//   axios.defaults.headers.Authorization = '';
// };

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    // credentials - облікові дані які передаються при регістраціі (name,email,password from RegisterForm)
    try {
      const responce = await axios.post('/users/signup', credentials);
      console.log(responce.data);
      setAuthHeaders(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    // credentials - облікові дані які передаються при регістраціі (email,password from LoginForm)
    try {
      const responce = await axios.post('/users/login', credentials);
      console.log(responce.data);
      setAuthHeaders(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
