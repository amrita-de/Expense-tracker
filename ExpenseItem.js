
import React from 'react';

const ExpenseItem = ({ expense, editExpense, deleteExpense }) => {
  return (
    <div className="expense-item">
      <div>{expense.title}</div>
      <div>{expense.amount}</div>
      <div>{expense.date}</div>
      <div>{expense.category}</div>
      <button onClick={editExpense}>Edit</button>
      <button onClick={deleteExpense}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
