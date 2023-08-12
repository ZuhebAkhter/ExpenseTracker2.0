import React from 'react'

const ExpensesList = (props) => {
  return (
    <div className='d-flex justify-content-center'>
  
<div class="card w-50 m-3">
  <div class="card-body">
    <div className='d-flex justify-content-between'>
    <section className='fs-1'>{props.amount}<span className='fs-5'>$</span></section><span className='float-end fw-bold fs-4'>{props.category}</span></div>
    <span className='d-block fw-italic'>{props.description}</span>
  </div>
</div>
</div>
  )
}

export default ExpensesList