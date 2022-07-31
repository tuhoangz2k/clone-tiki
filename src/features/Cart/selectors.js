import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cart.cartItems;
const cartItemsCount = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((count, item) => {
    return count + item.quantity;
  }, 0)
);
const cartTotal = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce((total, item) => {
    return total + item.quantity * item.product.salePrice;
  }, 0)
);
export { cartItemsCount, cartTotal };
