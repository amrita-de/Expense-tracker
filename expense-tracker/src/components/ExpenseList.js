
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          expense={expense}
          editExpense={() => editExpense(index)}
          deleteExpense={() => deleteExpense(index)}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
