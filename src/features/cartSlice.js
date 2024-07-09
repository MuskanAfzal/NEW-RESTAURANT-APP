import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice += newItem.price * (newItem.quantity || 1);
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity || 1,
          totalPrice: newItem.price * (newItem.quantity || 1),
          image: newItem.image
        });
      }
      state.totalQuantity += newItem.quantity || 1;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      } else {
        state.items = state.items.filter(item => item.id !== id);
      }
      state.totalQuantity--;
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
