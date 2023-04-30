import React, { useCallback, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredExpenses = items
    .filter((item) => item.date.getUTCFullYear().toString() === filteredYear)
    .map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));

  const expensesContent =
    filteredExpenses === 0 ? <p>No expenses found.</p> : filteredExpenses;

  const filterChangeHandler = useCallback((selectedYear) => {
    setFilteredYear(selectedYear);
  }, []);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
