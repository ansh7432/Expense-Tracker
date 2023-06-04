import React from "react"
import Form from "./Form"

import "./new.css"

const New=(props)=>{
    const saveData=(enteredData)=>{
        const expenseData={
            ...enteredData,
            id:Math.random().toString()
        }
        props.onAdd(expenseData)
    }
return(
    <div className="new-expense">

        <Form onSave={saveData}></Form>
    </div>
)
}

export default New