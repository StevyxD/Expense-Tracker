import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Cards";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

// Expenses.js is the parent component
// ExpenseDate.js gets date
// ExpenseItem.js is the child component

