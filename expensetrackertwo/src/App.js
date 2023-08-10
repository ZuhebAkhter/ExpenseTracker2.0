import React from 'react'
import Authentication from './Components/AuthenticationFolder/Authentication'
import Navbar from './Components/NavbarItems/Navbar'
import {Routes,Route} from 'react-router-dom'
import Main from './Components/MainBody/Main'
import ProfileUpdate from './Components/MainBody/ProfileUpdate'
const App = () => {
  return (
    <div>
    <header>
      <Navbar/>
    </header>
    <Routes>
      <Route path='/'  element={<Authentication/>}></Route>
     <Route path='/welcome' element={<Main/>}></Route>
     <Route path='/welcome/profile' element={<ProfileUpdate/>}></Route>
     </Routes>
     </div>
  )
}

export default App
