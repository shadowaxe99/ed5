import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import IncomeExpenseTracker from './components/IncomeExpenseTracker';
import ContractManager from './components/ContractManager';
import ContentScheduler from './components/ContentScheduler';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IncomeExpenseTracker />
        <ContractManager />
        <ContentScheduler />
      </div>
    </Provider>
  );
}

export default App;