import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState : {
    name: "kim", age: 20
  },
  reducers: {
  	changeName(state){
    	state.name = "park";
    },
    addAge(state) {
      state.age = state.age + 1;
    }
    
  }
});

export let { changeName, addAge } = user.actions;

export default user;