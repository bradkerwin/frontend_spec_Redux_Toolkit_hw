import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer, { exerciseSlice } from "./ExerciseSlice";

const store = configureStore({
    reducer: {
        workout: exerciseReducer,
    }
})

export default store;