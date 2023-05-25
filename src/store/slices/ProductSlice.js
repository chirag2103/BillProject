import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeProduct(state, action) {},
  },
});
export default ProductSlice.reducer;
export const { addProduct } = ProductSlice.actions;
