import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    item: [],
  },
    reducers: {
        saveAllProducts: (state, action) => {
            return {...state,items:action.payload}
      },
  quantityChange: (state, action) => {
      console.log("Change");
    },
   
  },
});


export const { saveAllProducts, quantityChange } = CartSlice.actions;
export default CartSlice.reducer;