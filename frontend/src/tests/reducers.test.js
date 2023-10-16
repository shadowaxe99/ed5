import { incomeExpenseReducer, contractReducer, contentReducer } from '../redux/reducers';
import { ADD_INCOME_EXPENSE, UPDATE_CONTRACT, SCHEDULE_CONTENT } from '../redux/actions';

describe('Reducers', () => {
  describe('incomeExpenseReducer', () => {
    it('should handle ADD_INCOME_EXPENSE', () => {
      const initialState = [];
      const action = {
        type: ADD_INCOME_EXPENSE,
        payload: { id: 1, type: 'income', amount: 1000, description: 'Brand deal' },
      };
      const expectedState = [
        { id: 1, type: 'income', amount: 1000, description: 'Brand deal' },
      ];
      expect(incomeExpenseReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('contractReducer', () => {
    it('should handle UPDATE_CONTRACT', () => {
      const initialState = [];
      const action = {
        type: UPDATE_CONTRACT,
        payload: { id: 1, brand: 'Brand A', status: 'active' },
      };
      const expectedState = [
        { id: 1, brand: 'Brand A', status: 'active' },
      ];
      expect(contractReducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('contentReducer', () => {
    it('should handle SCHEDULE_CONTENT', () => {
      const initialState = [];
      const action = {
        type: SCHEDULE_CONTENT,
        payload: { id: 1, title: 'New video', scheduledTime: '2022-01-01T10:00:00Z' },
      };
      const expectedState = [
        { id: 1, title: 'New video', scheduledTime: '2022-01-01T10:00:00Z' },
      ];
      expect(contentReducer(initialState, action)).toEqual(expectedState);
    });
  });
});