import React from "react";
import { Title, SwitcherBox, Buttons } from "./components.js";
import { useReducer } from "react";
import initialState from "./initialState.js";
import reducer from "./reducer.js";
import context from "./context.js";
import "../stylesheets/css/main.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider value={{ state, dispatch }}>
      <div className="wrapper">
        <div className="block">
          <Title />
          <div className="content">
            <SwitcherBox />
            <Buttons />
          </div>
        </div>
      </div>
    </context.Provider>
  );
};

export default App;
