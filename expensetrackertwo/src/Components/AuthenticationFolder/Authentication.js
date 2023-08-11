import React, { useContext, useRef, useState } from "react";
import AuthContext from "../Store/AuthContext";
import { json, useNavigate } from "react-router-dom";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [Loading, setloading] = useState(false);
  const [forgetPasswrd, setForgetPasswrd] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRefPassword = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const switchtoFphandler = () => {
    setForgetPasswrd((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    localStorage.setItem("email", enteredEmail);
    const enteredPassword = passwordInputRef.current.value;
    if (enteredEmail.trim().length <= 0) {
      alert("Please Enter Email");

      return;
    }
    if (enteredPassword.trim().length < 7) {
      alert("password length Should Contain more then 7");
      return;
    }
    setloading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAETg2zF9x10EXhHPOpv0wtzwNtIHAPFXs";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAETg2zF9x10EXhHPOpv0wtzwNtIHAPFXs";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setloading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errormessage = "Email Exists";
            if (data && data.error && data.error.message) {
              errormessage = data.error.message;
              console.log(data.error.message);
            }
            throw new Error(errormessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/welcome");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
 const passwordUpdateHandler=(event)=>{
  const enteredEmail=emailInputRefPassword.current.value;
  event.preventDefault();
  setloading(true)
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAETg2zF9x10EXhHPOpv0wtzwNtIHAPFXs',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      requestType	:"PASSWORD_RESET",
      email:enteredEmail
    })
  }).then((res)=>res.json())
  .then(data=>console.log(data))

  .catch(err=>alert(err))
setloading(false)
 }
  return (
    <div>
      {!forgetPasswrd && (
        <div className="container d-flex justify-content-center mt-5">
          <form
            onSubmit={submitHandler}
            className="w-50 border rounded mt-5 px-5"
          >
            <h2 className="text-center pt-5">
              {isLogin ? "Sign In" : "SignUp"}
            </h2>

            <div className="form-outline mb-4">
              <label className="form-label">Email address</label>

              <input
                type="email"
                className="form-control"
                ref={emailInputRef}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Password</label>

              <input
                type="password"
                className="form-control"
                ref={passwordInputRef}
              />
            </div>
            {/* <div className="form-outline mb-4">
    <input type="password"  className="form-control" />
    <label className="form-label"  ref={confirmPassword}>Confirm Password</label>
  </div> */}
            <button type="submit" className="btn btn-primary btn-block mb-4">
              {isLogin ? "Login" : "SignUp"}
            </button>
            <div>{isLogin && <p>New User?</p>}</div>
            <button
              className="btn btn-outline-light text-success mx-auto"
              type="button"
              onClick={switchHandler}
            >
              {isLogin ? "Create Account" : "Log in Existing User"}
            </button>
            {Loading && <p className="text-center">Sending request</p>}
            <button
              onClick={switchtoFphandler}
              className="btn btn-secondary d-block mb-2 "
              type="button"
            >
              Forget Password
            </button>
          </form>
        </div>
      )}
      {forgetPasswrd && (
        <div className="container d-flex justify-content-center mt-5">
          <form onSubmit={passwordUpdateHandler} className="w-50 border rounded mt-5 px-5">
            <div className="form-outline my-4">
              <label className="form-label">Enter Registered Email</label>

              <input
                type="email"
                className="form-control"
                ref={emailInputRefPassword}
              />
            </div>
            <button type="submit" className="btn btn-success mb-3">Send Reset Link</button>
            <button
              onClick={switchtoFphandler}
              className="btn btn-secondary d-block mb-2 "
              type="button"
            >
              Login
            </button>
           {Loading && <p className="text-center">Sending Email...</p>}
          </form>
        </div>
      )}
      
    </div>
  );
};

export default Authentication;
