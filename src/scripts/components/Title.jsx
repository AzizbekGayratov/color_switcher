import React from "react";
import { useContext } from "react";
import context from "../context.js";

const Title = () => {
  const { state } = useContext(context);

  return (
    <h1
      className="title"
      style={{
        color: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        opacity: `${state.alpha / 100}`,
      }}
    >
      <span className="title__text">rgba</span>(
      <span id="title_red">{state.red}</span>,
      <span id="title_green">{state.green}</span>,
      <span id="title_blue">{state.blue}</span>,
      <span id="title_alpha">{state.alpha}%</span>)
    </h1>
  );
};

export default Title;
