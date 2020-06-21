import React, { createContext, useReducer } from "react"
import TransactionReducer from './transReducer'

const initialTransaction = [
    {amount: 500, desc: "Cash"},
    {amount: -50, desc: "Cold Drinks"},
    {amount: 100, desc: "Deposit"},
    {amount: -200, desc: "Utility Bill"},
]

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction)

    function addTransaction (transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
     

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )

}

