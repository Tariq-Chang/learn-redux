import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  //actions
  reducers: {
    increment: (state) => {
      if (state.counter < 10) {
        state.counter += 1;
      }
    },
    decrement: (state) => {
      if (state.counter > 0) state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

//export actions like increment decrement
export const { increment, decrement, reset } = counterSlice.actions;
// export counter feature
export default counterSlice.reducer;
