import React, { useState, useCallback } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredForm, setEnteredForm] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const { title, amount, date } = enteredForm;

  const changeHandler = useCallback((event) => {
    const { name, value } = event.target;

    setEnteredForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();

      const expenseData = {
        title: title,
        amount: amount,
        date: new Date(date),
      };

      onSaveExpenseData(expenseData);
      setEnteredForm({
        title: "",
        amount: "",
        date: "",
      });
    },
    [amount, date, title, onSaveExpenseData]
  );

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            // min="0.01"
            stop="0.01"
            onChange={changeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            stop="2022-12-31"
            onChange={changeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
