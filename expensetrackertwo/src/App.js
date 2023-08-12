import React from 'react'
import Authentication from './Components/AuthenticationFolder/Authentication'
import Navbar from './Components/NavbarItems/Navbar'
import {Routes,Route} from 'react-router-dom'
import Main from './Components/MainBody/Main'
import ProfileUpdate from './Components/MainBody/ProfileUpdate'
import ExpensesInput from './Components/MainBody/ExpensesInput'
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
     <Route path='/expenses' element={<ExpensesInput/>}></Route>
     </Routes>
     </div>
  )
}

export default App
