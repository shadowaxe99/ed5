```javascript
import { addIncomeExpense, updateContract, scheduleContent } from '../redux/actions';

describe('actions', () => {
  it('should create an action to add income or expense', () => {
    const incomeExpense = { type: 'income', amount: 1000, description: 'Brand deal' };
    const expectedAction = {
      type: 'ADD_INCOME_EXPENSE',
      payload: incomeExpense
    };
    expect(addIncomeExpense(incomeExpense)).toEqual(expectedAction);
  });

  it('should create an action to update a contract', () => {
    const contract = { brand: 'Brand X', status: 'active', renewalDate: '2022-12-31' };
    const expectedAction = {
      type: 'UPDATE_CONTRACT',
      payload: contract
    };
    expect(updateContract(contract)).toEqual(expectedAction);
  });

  it('should create an action to schedule content', () => {
    const content = { title: 'New video', platform: 'YouTube', postDate: '2022-01-01' };
    const expectedAction = {
      type: 'SCHEDULE_CONTENT',
      payload: content
    };
    expect(scheduleContent(content)).toEqual(expectedAction);
  });
});
```