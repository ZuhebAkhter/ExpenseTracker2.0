import React, { useRef, useState } from 'react'
import ExpensesList from './ExpensesList';

const ExpensesInput = (props) => {
    const amountInputRef=useRef();
    const descriptionInputRef=useRef();
    const categoryInputRef=useRef();
    const [expenses,setExpenses]=useState([])
    const [TotalAmount,setTotalAmount]=useState(0);
    

    const onAddExpensesHandler=(e)=>{
        e.preventDefault();
      const  enteredAmount=parseFloat(amountInputRef.current.value);
      const enteredDescription=descriptionInputRef.current.value;
      const  enteredCategory=categoryInputRef.current.value;
      setTotalAmount((TotalAmount + enteredAmount).toFixed(2));
        const ExpenseDeatisl={
            id:Math.random().toString(),
            amount:enteredAmount,
            description:enteredDescription,
            category:enteredCategory
        }
        // props.onSaveExpenseData(ExpenseDeatisl);
        setExpenses((prevExpenses)=>{
            return [ExpenseDeatisl,...prevExpenses]
                });
                   
        
    }
  return (
    <>
    <div className='d-flex justify-content-around '>
    <form onSubmit={onAddExpensesHandler} className='w-25 border border-warning border rounded p-5 mt-5'>
  <div className="mb-3">
    <label  className="form-label">Enter Amount:</label>
    <input type="number" className="form-control" ref={amountInputRef}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Description:</label>
    <input type="text" className="form-control" ref={descriptionInputRef} />
  </div>
  <div className="mb-3 form-check">
    <label className="form-check-label" >Category:</label>
    <select className="form-select" ref={categoryInputRef}>
  {/* <option selected>Traveling</option> */}
  <option >Travlleing</option>
  <option >Entertainment</option>
  <option >Rents</option>
  <option >Home Expenses</option>
  <option >Education</option>


</select>
  </div>
  <button type="submit" class="btn btn-primary">Add Expense</button>
</form>
<div className='w-25 border border-dark  border rounded-circle circle pt-5 mt-5'>
    <h2 className='text-center text-warning mt-5'>Total Expenses</h2>
    <section className='text-center text-danger fs-1 pt-5'>{TotalAmount}<span className='fs-5'>$</span></section>
    </div>

</div>
{expenses.map((expense)=>(
  <ExpensesList key={expense.id} amount={expense.amount}  description={expense.description} category={expense.category}/> 
 
))} 


    </>
  )
}

export default ExpensesInput