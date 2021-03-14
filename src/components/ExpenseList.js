import React from "react"
import ExpenseItem from "./ExpenseItem"

const ExpenseList = () => {
    const expenses = [
        { id: 1231, name: "Shopping", cost: 50},
        { id: 1231, name: "Holiday", cost: 300},
        { id: 1231, name: "Transportation", cost: 70},
        { id: 1231, name: "Fuel", cost: 40},
        { id: 1231, name: "Child Care", cost: 500},
    ];
    return (
        <ul className="list-group">
            {expenses.map((expense)=> (
                <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost} />
            ))}
           
        </ul>
    )
}

export default ExpenseList;