import React from "react";
import css from "./index.css";

export function MainInput(props) {
  return (
    <input
      className={css.input}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}
