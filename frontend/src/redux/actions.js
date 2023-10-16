// frontend/src/redux/actions.js

export const ADD_INCOME_EXPENSE = 'ADD_INCOME_EXPENSE';
export const UPDATE_CONTRACT = 'UPDATE_CONTRACT';
export const SCHEDULE_CONTENT = 'SCHEDULE_CONTENT';

export function addIncomeExpense(incomeExpense) {
  return {
    type: ADD_INCOME_EXPENSE,
    payload: incomeExpense
  };
}

export function updateContract(contract) {
  return {
    type: UPDATE_CONTRACT,
    payload: contract
  };
}

export function scheduleContent(content) {
  return {
    type: SCHEDULE_CONTENT,
    payload: content
  };
}