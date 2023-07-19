import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //   ###### Multiple States ######
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //  ###### Single State ######
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     number: "",
  //     date: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     // ##Less accurate way
  //     // setUserInput({
  //     //   ...userInput,
  //     //   title: event.target.value,
  //     // });

  //     // ##More accurate way
  //     setUserInput((prevState) => {
  //       return { ...prevState, title: event.target.value };
  //     });
  //   };

  //   const numberChangeHandler = (event) => {
  //     // setUserInput({
  //     //   ...userInput,
  //     //   number: event.target.value,
  //     // });
  //     setUserInput((prevState) => {
  //       return { ...prevState, number: event.target.value };
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     // setUserInput({
  //     //   ...userInput,
  //     //   date: event.target.value,
  //     // });
  //     setUserInput((prevState) => {
  //       return { ...prevState, date: event.target.value };
  //     });
  //   };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // passing data to parent element
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Number</label>
          <input
            onChange={numberChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// There are two ways to set mulitple states in a single component:
// 1. Use multiple useState() hooks
// 2. Use a single useState() hook and pass an object to it
