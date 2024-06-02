
import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const categoryAmounts = expenses.reduce((categories, expense) => {
    categories[expense.category] = (categories[expense.category] || 0) + expense.amount;
    return categories;
  }, {});

  return (
    <div className="expense-summary">
      <h2>Total Amount Spent: ${totalAmount.toFixed(2)}</h2>
      <h3>Amount Spent by Category:</h3>
      <ul>
        {Object.entries(categoryAmounts).map(([category, amount]) => (
          <li key={category}>{category}: ${amount.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
