import { createSlice } from "@reduxjs/toolkit";

export const exerciseSlice = createSlice({
    name: 'workoutPlan',
    initialState: {
        exercises: {},
        totalExercises: 0
    },

    reducers: {
        addExercise: (state, action) => {
            const { id } = action.payload
            if (state.exercises[id]) {
                state.exercises[id] += 1
            } else {
                state.exercises[id] = 1
            }

            state.totalExercises += 1
        },

        deleteExercise: (state, action) => {
            const { id } = action.payload
            if (state.exercises[id]) {
                state.exercises[id] -= 1
                
                if (state.exercises[id] === 0){
                    delete state.exercises[id]
                }

                state.totalExercises += 1

            }

        },
    }
})

export const { addExercise, deleteExercise } = exerciseSlice.actions
export default exerciseSlice.reducer