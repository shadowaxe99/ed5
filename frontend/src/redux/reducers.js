import { ADD_INCOME_EXPENSE, UPDATE_CONTRACT, SCHEDULE_CONTENT } from './actions';

const initialState = {
  incomeExpenses: [],
  contracts: [],
  contents: []
};

function incomeExpenseReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME_EXPENSE:
      return {
        ...state,
        incomeExpenses: [...state.incomeExpenses, action.payload]
      };
    default:
      return state;
  }
}

function contractReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CONTRACT:
      return {
        ...state,
        contracts: state.contracts.map(contract =>
          contract.id === action.payload.id ? action.payload : contract
        )
      };
    default:
      return state;
  }
}

function contentReducer(state = initialState, action) {
  switch (action.type) {
    case SCHEDULE_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload]
      };
    default:
      return state;
  }
}

export default function rootReducer(state = initialState, action) {
  return {
    incomeExpenses: incomeExpenseReducer(state.incomeExpenses, action),
    contracts: contractReducer(state.contracts, action),
    contents: contentReducer(state.contents, action)
  };
}