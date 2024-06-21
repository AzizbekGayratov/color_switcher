import React from "react";
import { useContext } from "react";
import context from "../context.js";

const Buttons = () => {
  const { state, dispatch } = useContext(context);

  return (
    <div className="btn__box">
      <div id="red_btn" className="btn__block">
        <p className="btn__text">Red</p>
        <div className="btn_nav">
          <button
            disabled={state.red === 0}
            onClick={() => dispatch({ type: "DECREMENT_RED" })}
            className="decrement__btn"
          >
            -
          </button>
          <span className="color__range">{state.red}</span>
          <button
            disabled={state.red === 255}
            onClick={() => dispatch({ type: "INCREMENT_RED" })}
            className="increment__btn"
          >
            +
          </button>
        </div>
      </div>
      <div id="green_btn" className="btn__block">
        <p className="btn__text">Green</p>
        <div className="btn_nav">
          <button
            disabled={state.green === 0}
            onClick={() => dispatch({ type: "DECREMENT_GREEN" })}
            className="decrement__btn"
          >
            -
          </button>
          <span className="color__range">{state.green}</span>
          <button
            disabled={state.green === 255}
            onClick={() => dispatch({ type: "INCREMENT_GREEN" })}
            className="increment__btn"
          >
            +
          </button>
        </div>
      </div>
      <div id="blue_btn" className="btn__block">
        <p className="btn__text">Blue</p>
        <div className="btn_nav">
          <button
            disabled={state.blue === 0}
            onClick={() => dispatch({ type: "DECREMENT_BLUE" })}
            className="decrement__btn"
          >
            -
          </button>
          <span className="color__range">{state.blue}</span>
          <button
            disabled={state.blue === 255}
            onClick={() => dispatch({ type: "INCREMENT_BLUE" })}
            className="increment__btn"
          >
            +
          </button>
        </div>
      </div>
      <div id="alpha_btn" className="btn__block">
        <p className="btn__text">Alpha</p>
        <div className="btn_nav">
          <button
            disabled={state.alpha === 0}
            onClick={() => dispatch({ type: "DECREMENT_ALPHA" })}
            className="decrement__btn"
          >
            -
          </button>
          <span className="color__range">{state.alpha}</span>
          <button
            disabled={state.alpha === 100}
            onClick={() => dispatch({ type: "INCREMENT_ALPHA" })}
            className="increment__btn"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
