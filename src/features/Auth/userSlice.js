import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';
// First, create the thunk
export const rigister = createAsyncThunk('user/register', async (payload) => {
  //  call API to rigister
  const data = await userApi.register(payload);
  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  //  call API to rigister
  const data = await userApi.login(payload);
  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

const initialState = {
  current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  settings: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      // remove user in local storage and tokens

      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      // reset user in redux
      state.current = {};
    },
  },
  extraReducers: {
    [rigister.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
