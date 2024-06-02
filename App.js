
import React, { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const editExpense = (index) => {
    const updatedTitle = prompt("Enter new title", expenses[index].title);
    const updatedAmount = prompt("Enter new amount", expenses[index].amount);
    const updatedDate = prompt("Enter new date", expenses[index].date);
    const updatedCategory = prompt("Enter new category", expenses[index].category);

    const updatedExpenses = expenses.map((expense, i) =>
      i === index ? { ...expense, title: updatedTitle, amount: parseFloat(updatedAmount), date: updatedDate, category: updatedCategory } : expense
    );
    setExpenses(updatedExpenses);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <AddExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} editExpense={editExpense} deleteExpense={deleteExpense} />
      <ExpenseSummary expenses={expenses} />
    </div>
  );
};

export default App;

