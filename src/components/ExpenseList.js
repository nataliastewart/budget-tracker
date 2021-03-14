import Ract from "react"

const ExpenseList = () => {
    const expenses = [
        { id: 1231, name: "Shopping", cost: 50},
        { id: 1231, name: "Holiday", cost: 300},
        { id: 1231, name: "Transportation", cost: 70},
        { id: 1231, name: "Fuel", cost: 40},
        { id: 1231, name: "Child Care", cost: 500},
    ];
    return (
        <ul>
            {expenses.map(((expense)=> (
                <ExpenseItem />
            )))}
           
        </ul>
    )
}