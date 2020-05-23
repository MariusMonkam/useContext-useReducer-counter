import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
export const UserContext = React.createContext();
const username = prompt("Enter Your Name");
const rootElement = document.getElementById("root");
ReactDOM.render(
  <UserContext.Provider value={username}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContext.Provider>,
  rootElement
);
