import { createSelector } from 'reselect';

// Input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartItemTotal = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + (cartItem.price * cartItem.quantity),
            0
        )
);