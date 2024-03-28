import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({ role, onSelectField }) => { 
    const [isOpen, setIsOpen] = useState(false);
const handleFieldClick = (field) => {
    onSelectField(field); 
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
     <nav className="navbar navbar-expand-lg navbar-expand-md bg-lisht ">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" onClick={toggleNavbar} >
          <span className="navbar-toggler-icon" > <FontAwesomeIcon icon={faBars} className='icon' /></span>
        </button>
        <a className="navbar-brand" href="/">Learning</a>
        {isOpen && (<span >
                  <FontAwesomeIcon icon={faUser} className='icon' />
              </span>
              )}

              <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}  navbar-middle` } id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => handleFieldClick('events')}>
              <span className="nav-link" >Events</span>
            </li>
            
            {role === 'admin' && (
              <li className="nav-item" onClick={() => handleFieldClick('user creation')}>
             <span className="nav-link" >user creation</span>
              </li>
            )}
             {role === 'admin' && (
              <li className="nav-item" onClick={() => handleFieldClick('event creation')}>
                <span className="nav-link" >event creation</span>
              </li>
            )}
            {role === 'user' && (
              <li className="nav-item" onClick={() => handleFieldClick('resources')}>
                <a className="nav-link" href="/profile"> Resources</a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
              </div>
              {!isOpen && (<span >
                  <FontAwesomeIcon icon={faUser} className='icon' />
              </span>
              )}
      </div>
    </nav>
  )
}

export default Navbar;