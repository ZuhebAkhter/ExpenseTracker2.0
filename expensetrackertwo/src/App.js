import React from 'react'
import Authentication from './Components/AuthenticationFolder/Authentication'
import Navbar from './Components/NavbarItems/Navbar'
const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Authentication/>
    </React.Fragment>
  )
}

export default App
