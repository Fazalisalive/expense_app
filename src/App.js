import React from 'react';
import Child from './Child';
 
import './App.css';
import {TransactionProvider} from './transContext'

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
