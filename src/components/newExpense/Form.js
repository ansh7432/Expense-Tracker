import "./Form.css";
import React, { useState } from "react";

const Form= (props)=> {
  const [itemChange, setItemChange] = useState("");
  const [rupeeschange, setRupeesChange] = useState("");
  const [dateChange, setDateChange] = useState("");

  const itemChangehandle = function (e) {
    setItemChange(e.target.value);
  };
  const amountChangehandle = function (e) {
    setRupeesChange(e.target.value);
  };
  const dateChangehandle = function (e) {
    setDateChange(e.target.value);
  };
  const submitHandle = function (e) {
    e.preventDefault();

    const expensesData = {
      item: itemChange,
      rupees: rupeeschange,
      date: new Date(dateChange),
    };
    props.onSave(expensesData)
    setRupeesChange('')
    setDateChange('')
    setItemChange('')
  };

  return (
    <form onSubmit={submitHandle}>
      <div className="container1">
        <div className="container2">
          <label>Item</label>
          <input
            type="text"
            onChange={itemChangehandle}
            value={itemChange}
          ></input>
        </div>
        <div className="container2">
          <label>Amount</label>
          <input
            type="text"
            onChange={amountChangehandle}
            value={rupeeschange}
          ></input>
        </div>
        <div className="container2">
          <label>Date</label>
          <input type="date" 
          onChange={dateChangehandle}
          value={dateChange}></input>
          <div className="button">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
