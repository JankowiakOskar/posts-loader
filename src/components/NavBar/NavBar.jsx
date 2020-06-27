import React from 'react';

const NavBar = () => {
  return ( 
      <nav className="navbar navbar-dark bg-dark sticky-top" expand="xl">
        <div className="container-md d-flex justify-content-start">
          <li className="nav-link border border-primary rounded text-white">
             Articles
          </li>
        </div>
      </nav>
   );
}
 
export default NavBar;