import "./App.css";
import React,{useState} from "react";
import New from "./components/newExpense/new";
import Expenses from "./components/expenses";

const DUMMY_EXPENSE = [
  {
    item: 'book',
    date: new Date("2023, 05, 29"),
    rupees: 500,
  },
  {
    item: 'Toy',
    date: new Date("2023, 06, 02"),
    rupees: 250,
  },

  {
    item: 'Food',
    date: new Date("2023, 06, 5"),
    rupees: 700,
  },
];

const App=()=> {

const [expense,setExpense] = useState(DUMMY_EXPENSE);
  const addHandle=(expense1)=>{
    setExpense((prevExpense)=>{
      return [expense1,...prevExpense]
    });
    console.log(expense1);
    console.log(expense1);
  }
  return (
    <div>
      <New onAdd={addHandle}></New>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
