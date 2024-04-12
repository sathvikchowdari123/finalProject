import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Navbar = ({ role, onSelectField }) => { 
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { userInfo } = useUser();
  const user = JSON.parse(localStorage.getItem('user'))
  const [newSkills, setNewSkills] = useState('');
  
  const navigate = useNavigate();
  const handleAddSkills = async () => {
    const skillsArray = newSkills.split(',');
    try {

      const response = await axios.post('http://localhost:3001/add-skills', { newSkills: skillsArray,email:user.email });
      if (response.status === 200) {
        console.log('skills added successfully');
        toast.success('skills added')
       
  
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
      toast.error('error')
 }
  };
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
  const handleLogout = () => {
  
  localStorage.clear();
  
  
 navigate('/')
};
  return (
     <nav className="navbar navbar-expand-lg navbar-expand-md bg-lisht ">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" onClick={toggleNavbar} >
          <span className="navbar-hamburger-icon" > <FontAwesomeIcon icon={faBars} className='icon' /></span>
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
              <a className="nav-link" onClick={handleLogout}>Logout</a>
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
                  <p>{user.email}</p>
                  <p>{user.role}</p>
                  <p>{user.firstname}</p>
                   <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your skills separated by commas"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleAddSkills}>Add Skills</button>
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