import { configureStore } from "@reduxjs/toolkit"
import Cart from "./Reducers/Cart"

export default configureStore({

    //Root_Reducer
    reducer: {
        Cart:Cart,
    }
})