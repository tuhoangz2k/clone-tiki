import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

// First, create the thunk
export const rigister = createAsyncThunk('user/register', async (payload) => {
  //  call API to rigister
  const data = await userApi.register(payload);
  // save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  return data.user;
});

const initialState = {
  current: {},
  settings: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [rigister.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { reducer } = userSlice;
export default reducer;
