import { useContext, useRef } from "react"
import React   from 'react'
import AuthContext from "../Store/AuthContext"

const ProfileUpdate = () => {
const authCtx=useContext(AuthContext)
const nameInputref=useRef()
const importUrlInputref=useRef();
const UserEmail=localStorage.getItem('email')

fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAETg2zF9x10EXhHPOpv0wtzwNtIHAPFXs',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        idToken:authCtx.token,
    })
}).then(res=>res.json())
.then((data)=>{
      console.log(data)
    // authCtx.profiles.push(data.users);
    // console.log(authCtx.profiles)
    // authCtx.profiles.map((user)=>{
    //     console.log(user)
    data.users.map((user)=>{
        const userDetails={
            email:user.email,
            name:user.displayName,
            image:user.photoUrl
        }
        authCtx.profiles.push(userDetails)
        if(user.displayName.length > 0){
            nameInputref.current.value=user.displayName;
            importUrlInputref.current.value=user.photoUrl;
        }
    })
    // })

}).catch(error=>{
    console.log(error)
})

    const updateProfileHandler=(event)=>{
        event.preventDefault();
        
  const enteredName=nameInputref.current.value;
  const enteredImage=importUrlInputref.current.value;
  if(enteredName.length <= 0 && enteredImage.length <= 0) {
    alert('Please Fill Details')
    return
  }

  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAETg2zF9x10EXhHPOpv0wtzwNtIHAPFXs',{
     method:'POST',
     headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: authCtx.token,
        displayName: enteredName,
        photoUrl: enteredImage,
        returnSecureToken: true
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Profile updated successfully:", data);
    })
    .catch(error => {
      console.error("Error updating profile:", error);
    });
    
  
    }
  return (
    <div className='container-fluid d-flex justify-content-center pt-5 mt-5'>
    <form onSubmit={updateProfileHandler} className='w-50 border rounded p-5 m-5'>
        <h3 className='pb-3'>Update Your Profile:</h3>
         <div className="row mb-4">
    
      <div className="form-outline">
        <input type="text"  className="form-control" ref={nameInputref} />
        <label className="form-label" >Name</label>
      </div>
    
   
  </div>

  <div className="form-outline mb-4">
    <input type="url"  className="form-control" ref={importUrlInputref} />
    <label className="form-label" >Image Url</label>
  </div>
  <div className="form-outline">
   <button type="submit" className='btn btn-success'>Update</button>
  </div>
    </form>
    </div>
  )
}

export default ProfileUpdate