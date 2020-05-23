import React, { useContext, useReducer } from "react";
import "./styles.css";
import { UserContext } from "./index";

const initialstate = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialstate;
    default:
      return initialstate;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const value = useContext(UserContext);
  return (
    <div className="App">
      <div>Hello, {value} </div>
      <div>Count:{state.count}</div>
      <button onMouseDown={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onMouseDown={() => dispatch({ type: "reset" })}>Reset</button>
      <button onMouseDown={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
}
