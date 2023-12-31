import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.filterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// dropDownChangeHandler is the function called when a year is 
// selected and the value is passed to filterChangeHandler
// which then passes the value to the parent component Expenses.js