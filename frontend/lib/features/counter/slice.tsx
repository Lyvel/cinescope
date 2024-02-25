"use client";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Represents the state of the counter.
 */
export interface CounterState {
  value: number;
}

// Define the initial state for the counter
const initialState: CounterState = {
  value: 0,
};

/**
 * The counter slice of the Redux store.
 */
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /**
     * Increments the counter value by 1.
     * @param {CounterState} state - The current state.
     */
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Export the action creators and reducer
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
