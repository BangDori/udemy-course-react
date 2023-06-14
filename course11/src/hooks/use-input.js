import { useReducer } from "react";

const INPUT = "INPUT";
const BLUR = "BLUR";
const RESET = "RESET";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        value: action.value,
      };
    case BLUR:
      return {
        ...state,
        isTouched: true,
      };
    case RESET:
      return {
        value: "",
        isTouched: false,
      };
    default:
      return {
        value: "",
        isTouched: false,
      };
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.enteredValue);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR", value: event.target.value });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
