import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: 'cart',
  initialState : [
    {id: 0, name: 'White and Black', count: 2},
    {id: 2, name: 'Grey Yordan', count: 1}
  ],
  reducers: {
    changeQuantity(state, action) {
      let num = state.findIndex((a)=>{return a.id == action.payload; });
      state[num].count += 1;
    },
    addToCart(state, action) {
      state.push(action.payload);
    }
  }
});
export let { changeQuantity, addToCart } = cart.actions;
export default cart;