import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: 'cart',
  initialState : [
    {id: 0, name: 'White and Black', count: 2},
    {id: 2, name: 'Grey Yordan', count: 1}
  ],
  reducers: {
    changeQuantity(state, action) {
      state[action.payload].count += 1;
    },

  }
});
export let { changeQuantity } = cart.actions;
export default cart;