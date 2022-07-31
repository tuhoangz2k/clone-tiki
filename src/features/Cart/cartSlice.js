import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMiniCart: false,
  cartItems: [],
};

const isShowCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showMiniCart(state) {
      return (state.showMiniCart = true);
    },
    hideMiniCart(state) {
      return (state.showMiniCart = false);
    },
    addToCart(state, action) {
      // newItem={id,product,quantity}
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },
    setToCart(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeToCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
  },
});
const { actions, reducer } = isShowCart;
export const { showMiniCart, hideMiniCart, addToCart, setToCart, removeToCart } = actions;
export default reducer;
