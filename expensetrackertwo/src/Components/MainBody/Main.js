import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div className='container-fluid'>
        <h2 className='text-center mt-5 pt-5'>Welcome to Expense Tracker</h2>
        <div className='conatiner d-flex justify-content-center'>
            <p className='fw-italic '>Your Profile is Incomplete</p>
            <Link className='link-underline link-underline-opacity-0 ps-2' to={'/welcome/profile'}>Complete Now</Link>
        </div>
    </div>
  )
}

export default Main