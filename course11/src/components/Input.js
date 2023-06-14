import React, { useState } from "react";

const Input = () => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  return (
    <div className={nameInputClasses}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        value={enteredName}
        onBlur={nameInputBlurHandler}
        onChange={nameInputChangeHandler}
      />
    </div>
  );
};

export default Input;
