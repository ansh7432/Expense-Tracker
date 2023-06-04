import React from "react";
import ExpenseItem from "./expenseItems";

function Expenses(props) {
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          item={expense.item}
          rupees={expense.rupees}
          date={expense.date}
        ></ExpenseItem>
      ))}
      
    </div>
  );
}

export default Expenses;
