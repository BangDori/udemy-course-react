import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredExpenses = items.filter(
    (item) => item.date.getUTCFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
