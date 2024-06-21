import React from "react";
import { useContext } from "react";
import context from "../context.js";
import Swal from "sweetalert2";

const SwitcherBox = () => {
  const { state } = useContext(context);

  const copyColor = () => {
    const color = `rgba(${state.red}, ${state.green}, ${state.blue}, ${
      state.alpha / 100
    })`;

    navigator.clipboard.writeText(color);
    Swal.fire({
      icon: "success",
      title: "Copied to clipboard",
      showConfirmButton: false,
      timer: 800,
    });
  };
  return (
    <div
      onClick={() => copyColor()}
      className="switcher__box"
      style={{
        backgroundColor: `rgba(${state.red}, ${state.green}, ${state.blue}, ${state.alpha}%)`,
      }}
    >
      <p className="copy">Click to copy</p>
    </div>
  );
};

export default SwitcherBox;
