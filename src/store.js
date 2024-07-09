import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import itemsReducer from './features/itemsSlice';
import blogsReducer from './features/blogSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
    blogs: blogsReducer,
  },
});
