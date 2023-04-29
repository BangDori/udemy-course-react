import React, { useCallback, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = useCallback((selectedYear) => {
    setFilteredYear(selectedYear);
  }, []);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {items.map((item) => (
        <ExpenseItem key={item.id} expense={item} />
      ))}
    </Card>
  );
};

export default Expenses;
