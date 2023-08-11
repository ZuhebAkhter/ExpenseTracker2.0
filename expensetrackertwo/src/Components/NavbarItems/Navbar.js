import React from 'react'

const Navbar = () => {
  return (
//     <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  
//     <h2 className='me-auto text-primary'>Expense Tracker</h2>
  
// </nav>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button> */}

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <h2>Expense Tracker</h2>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Pr</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li> */}
      </ul>
    </div>

    <div className="d-flex align-items-center">
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart"></i>
      </a>

     
      
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src=""
            className="rounded-circle"
            height="25"
            alt="Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar