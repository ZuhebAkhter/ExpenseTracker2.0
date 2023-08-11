import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../Store/AuthContext'

const Main = () => {
    const authCtx=useContext(AuthContext);
    const verifyEmailHandler=()=>{
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAETg2zF9x10EXhHPOpv0wtzwNtIHAPFXs',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                requestType:  "VERIFY_EMAIL",
                idToken: authCtx.token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className='container-fluid'>
        <h2 className='text-center mt-5 pt-5'>Welcome to Expense Tracker</h2>
        <h5 className='fw-italic text-center'>Please Verify Your email</h5><br></br>

        <div className='conatiner d-flex justify-content-center'>
      
        <button onClick={verifyEmailHandler} className='btn btn-success d-block'>Verify Email</button>
        </div>
        <div className='conatiner d-flex justify-content-center mt-5'>
      
        <p className='fw-italic '>Your Profile is Incomplete</p>
            <Link className='link-underline link-underline-opacity-0 ps-2' to={'/welcome/profile'}>Complete Now</Link> 
        </div>
    </div>
  )
}

export default Main