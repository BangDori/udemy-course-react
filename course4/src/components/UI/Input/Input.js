import React, { useImperativeHandle, useRef } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef(
  ({ isValid, label, type, id, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    const activate = () => inputRef.current.focus();

    useImperativeHandle(ref, () => {
      return {
        activate: activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor="email">{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
