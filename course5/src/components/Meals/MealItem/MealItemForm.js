import { useRef } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ onAddToCart, id }) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = parseInt(enteredAmount); // + 기호를 붙이면 문자열에서 숫자로 형변환

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      alert("Please enter a valid amount (1~5).");
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount__" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
