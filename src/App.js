import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./features/counterSlice";

function App() {
  const counter = useSelector((store) => store.counter.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(counter))}>Increment</button>
      <button onClick={() => dispatch(decrement(counter))}>Decrement</button>
      <button onClick={() => dispatch(reset(counter))}>Reset</button>
    </div>
  );
}

export default App;
