import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddUser = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();



    
    if (!firstname || !lastname || !email || !password || !username || !role) {
      // Handle validation error (e.g., display error message)
      console.log('All fields are required');
      return;
    }

    try {
      // Send data to the server (assuming you're using Axios)
      const response = await axios.post('http://localhost:3001/adduser', { firstname, lastname, email, password, username, role });
      console.log('User added successfully:', response.data);
      toast.success('user added successfully')

      
    } catch (error) {
      // Handle error (e.g., display error message)
      if (error.response && error.response.status === 400) {
        toast.error('user already exist');
        
      } else {
        console.error('error adding user', error.message);
      }
      
    }
  };
    return (
      <div className="user-container">
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6">
          <div className="card custom-card">
                <div className="card-body" >
                 <div><FontAwesomeIcon icon={faUser} className='user-icon'/></div>
              <h5 className="card-title">Add User</h5>
              <form onSubmit={handleSubmit} style={{width:'100%'}}>
                <div className="row"  >
                  <div className="col-lg-6 col-md-6 ">
                    <div className="form-group">
                      
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstname}
                        placeholder='first name'
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                   
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastname}
                         placeholder='Last name'
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                         placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                   
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                         placeholder='username'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                         placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                    
                      <select
                        className="form-control"
                        id="role"
                        value={role}
                         placeholder='role'
                        onChange={(e) => setRole(e.target.value)}
                        required
                      >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddUser;