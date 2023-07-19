import React, { useState } from "react";
import ExpenseFilter from "./ExpensesFilter.js";
import Card from "../UI/Cards";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";
require("./expenses.css");

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          filterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

// line 22 is used to render a list of items. Its not hardcoded lioke lines 30 onwards

// ExenseFilter.js is a drop down button that gives us which year we want to search
// filterChange is the value used to get year from the drop down button
// filtered expenses is the subArray of expenses that we want to display

// The subarray is then passed to ExpensesList.js which is used to render the list
