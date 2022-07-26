import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const couterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state) {
      return state + 1;
    },
    descrease(state) {
      return state - 1;
    },
  },
});
const { actions, reducer } = couterSlice;
export const { increase, descrease } = actions;
export default reducer;
