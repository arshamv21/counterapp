import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    //reducer is a predefined key it store an object that can hold more than one reducer as key value pair
    reducer:{
        counter:counterSlice
    }
})