import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './slices/ProductSlice';
import UserSlice from './slices/UserSlice';
const store = configureStore({
  reducer: {
    product: ProductSlice,
    user: UserSlice,
  },
});

export default store;
