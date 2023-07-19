import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // This is done to send data from child component to parent component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

// This is used to store the data in the form of an object
// const expenseData = {
//   ...enteredExpenseData,
//   id: Math.floor(Math.random() * 100).toString(),
// };

// isEditing useState hook is used to toggle between the form and the button
// Then we pass a function to child component ExpenseForm to get the data from the form
// Then we pass the data to the parent component NewExpense.js
// Then we pass the data to the parent component Expenses.js
