import React, { useContext, useState } from 'react';
 
// import './App.css';
import { TransactionContext } from './transContext';


function Child() {
    
    let {transactions, addTransaction} = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmmount, setAmmount] = useState(0);
   
    const handleAddition = (event) => {
      event.preventDefault();
      if(Number(newAmmount) === 0) {
        alert("Please enter a valid amount!")
        return false;
      }
       addTransaction ({
         amount: Number(newAmmount),
         desc: newDesc
       });
       
       setDesc('')
       setAmmount('')
    }
    

    const getIncome = () => {
      let income = 0;
      for (var i=0; i < transactions.length; i++) {
        if (transactions[i].amount > 0 )
          income += transactions[i].amount
      }
      return income
    }
    const getExpense = () => {
      let expense = 0;
      for (var i=0; i < transactions.length; i++) {
        if (transactions[i].amount < 0 )
          expense += transactions[i].amount
      }
      return expense
    }
    
  return (
    <div className="container">
      <h1 className="text-center lable"> Expense Tracker</h1>
      <h3 className="lable-2">YOUR BALANCE <br /> ${getIncome() + getExpense()} </h3>
      <div className="expense-container">
        <h4 className="lable-4">INCOME <br /> ${getIncome()}</h4>
        <h3 className="lable-3">EXPENSE <br /> ${getExpense()}</h3>
      </div>
      <h3>History</h3>
      <hr />
      <ul className="trnsaction-list">
                {transactions.map((transObj, ind) => {
                  
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                        {/* <p  className="red-cross"> x </p>  */}
                        
                    </li>
                    
                    )
                })}
      </ul>
      <hr />
      <h3>Add new transaction</h3>
      <hr />
      <form className="transaction-form" onSubmit={handleAddition}>
         
          <label>
              Enter Ammount <br />
              <input type="Number" value={newAmmount} placeholder="Amount" required onChange={(ev) => setAmmount(ev.target.value)} />
          </label>
          <label>
              Enter Description <br />
              <input type="text" value={newDesc} placeholder="Description"  required onChange={(ev) => setDesc(ev.target.value)} />
              <br />
          </label>
          <br />
          <input className="button" type="submit" value="Add Transaction"  />

      </form>
    </div>
  );
}

export default Child;
