import React,{useContext, useRef, useState} from 'react'
import AuthContext from '../Store/AuthContext';
import {useNavigate} from 'react-router-dom'

const Authentication = () => {
  const [isLogin,setIsLogin]=useState(true)
  const [Loading,setloading]=useState(false)
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const authCtx=useContext(AuthContext)
const navigate=useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if(enteredEmail.trim().length <= 0){
      (alert('Please Enter Email'))

      return

    }
    if(enteredPassword.trim().length < 7){
      alert('password length Should Contain more then 7')
      return
    }
    setloading(true)
    let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAETg2zF9x10EXhHPOpv0wtzwNtIHAPFXs'
    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAETg2zF9x10EXhHPOpv0wtzwNtIHAPFXs'
    }
  

   
        fetch(url,
          {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        
  setloading(false)
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errormessage='Email Exists';
            if(data && data.error && data.error.message){
              errormessage=data.error.message;
              console.log(data.error.message)
            }
            throw new Error(errormessage)
          
          });
        }
      }).then((data)=>{
        authCtx.login(data.idToken)
        navigate('/welcome')
      })
      .catch((err)=>{
        alert(err.message)

      })
    
  };
  const switchHandler=()=>{
    setIsLogin((prevState)=>(!prevState))
  }


  return (
    <div className='container d-flex justify-content-center mt-5'>
    <form onSubmit={submitHandler} className='w-50 border rounded mt-5 px-5'>
  <h2 className='text-center pt-5'>{isLogin ? 'Sign In':'SignUp'}</h2>

  <div className="form-outline mb-4">
  <label className="form-label"  >Email address</label>

    <input type="email"  className="form-control" ref={emailInputRef} />
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" >Password</label>

    <input type="password"  className="form-control"  ref={passwordInputRef} />
  </div>
  {/* <div className="form-outline mb-4">
    <input type="password"  className="form-control" />
    <label className="form-label"  ref={confirmPassword}>Confirm Password</label>
  </div> */}

  

  <button type="submit"  className="btn btn-primary btn-block mb-4">{isLogin ? 'Login':'SignUp'}</button>
 <div>{isLogin && <p>New User?</p>}</div> 
<button className='btn btn-outline-light text-success ' type='button' onClick={switchHandler} >{isLogin ? 'Create Account':'Log in Existing User'}</button>
 
  {Loading && <p>Sending request</p>}
</form>
    </div>
  )
}

export default Authentication