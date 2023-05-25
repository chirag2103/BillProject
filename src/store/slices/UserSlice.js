import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userDetail: null,
    Date: null,
    LastBillNo: 1,
    BillNo: 1,
  },
  reducers: {
    setUser(state, action) {
      console.log(action.payload);
      state.userDetail = action.payload;
    },
    setDate(state, action) {
      console.log(action.payload);
      state.Date = action.payload;
    },
    setBillNo(state, action) {
      console.log(action.payload);
      state.BillNo = action.payload;
    },
    setLastBillNo(state, action) {
      console.log(action.payload);
      state.LastBillNo = action.payload;
    },
  },
});
export default UserSlice.reducer;
export const { setUser, setDate, setBillNo, setLastBillNo } = UserSlice.actions;
