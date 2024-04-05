import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../context/UserContext';
const Navbar = ({ role, onSelectField }) => { 
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
   const { userInfo } = useUser();
   const handleModalClose = () => {
    setShowModal(false);
  };
const handleFieldClick = (field) => {
    onSelectField(field); 
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleModal = () => {
    
    setShowModal(!showModal);
  };
  return (
     <nav className="navbar navbar-expand-lg navbar-expand-md bg-lisht ">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" onClick={toggleNavbar} >
          <span className="navbar-toggler-icon" > <FontAwesomeIcon icon={faBars} className='icon' /></span>
        </button>
        <a className="navbar-brand" href="/">Learning</a>
        {isOpen && (<span >
                  <FontAwesomeIcon icon={faUser} className='icon' onClick={toggleModal}/>
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
            {role === 'admin' && (
              <li className="nav-item" onClick={() => handleFieldClick('Add Resource')}>
                <span className="nav-link" >Add Resource</span>
              </li>
            )}
            {role === 'user' && (
              <li className="nav-item" onClick={() => handleFieldClick('resources')}>
                <a className="nav-link"> Resources</a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
              </div>
              {!isOpen && (<span >
                  <FontAwesomeIcon icon={faUser} className='icon' onClick={toggleModal}/>
              </span>
              )}
      </div>
     {showModal && (
  <>
    <div className="modal-backdrop show"></div>
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content" style={{ color: 'black' }}>
          <div className="modal-header">
            <h5 className="modal-title">Profile</h5>
            <button type="button" className="close" onClick={handleModalClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
                  <p>{userInfo.email}</p>
                  <p>{userInfo.role}</p>
            <a href="#" target="_blank" rel="noopener noreferrer">Read Full Article</a>
          </div>
        </div>
      </div>
    </div>
  </>
)}


    </nav>
  )
}

export default Navbar;