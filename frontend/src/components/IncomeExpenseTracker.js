import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncomeExpense } from '../redux/actions';

const IncomeExpenseTracker = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const dispatch = useDispatch();

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const handleIncomeExpense = () => {
    dispatch(addIncomeExpense({ income, expense }));
    setIncome(0);
    setExpense(0);
  };

  return (
    <div id="income-expense-tracker">
      <h2>Income and Expense Tracker</h2>
      <input
        type="number"
        value={income}
        onChange={handleIncomeChange}
        placeholder="Income"
      />
      <input
        type="number"
        value={expense}
        onChange={handleExpenseChange}
        placeholder="Expense"
      />
      <button onClick={handleIncomeExpense}>Add</button>
    </div>
  );
};

export default IncomeExpenseTracker;