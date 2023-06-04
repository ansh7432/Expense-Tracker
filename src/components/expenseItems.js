import React from "react";
import "./expenseItems.css";


function ExpenseItem(props) {
// const [item,setItem]= useState(props.item);


// const click= function(){
  // setItem("khushii")

// }

  return (
    <div className="container">
      <div className="date">{props.date.toLocaleDateString()}</div>
      <div className="item">
        <h2 className="item2">{props.item}</h2>
      </div>
      <div className="rupees">{props.rupees+" Rs"}</div>
      {/* <button onClick={click}>Simple Button</button> */}
    </div>
  );
}
export default ExpenseItem;
