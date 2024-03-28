import React from 'react'
import wave from '../assets/wave.jfif'
import LoginKey from '../assets/Loginkey.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useRole } from '../context/RoleContext';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [forgotemail, setForgotEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setforgotPassword] = useState(false);
     const navigate = useNavigate();
    // const { setRole } = useRole();
    // const { role } = useRole();
    // console.log('hiii');
    // console.log(role);
     const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    if (!email || !password) {
      console.log('Please fill in all fields.');
      return;
    }

    try {
      console.log(email)
      const response = await axios.post('http://localhost:3001/login', { email, password });

      console.log('bue')
      if (response.status === 200) {
        console.log('Login successful.');
        const role = response.data.user.role;
        console.log(response.data.user.role);
          // const userRole = response.data.role;
        //  setRole(userRole);
        if (role === 'user') { navigate(`/home/${role}`); }
        else { navigate(`/auth/${role}`);}
        
          
        
      } else {
        console.log('Login failed. Please try again.');
        
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
      
    }

    setEmail('');
    setPassword('');
  };

  const handleforgotpasswordsubmit = async (e) => {
    e.preventDefault();
    
  
    if (!forgotemail) {
      console.log('Please fill in all fields.');
      return;
    }

    try {
      console.log(forgotemail)
      const response = await axios.post('http://localhost:3001/reset-password', { email:forgotemail });

     
      if (response.status === 200) {
          console.log('Login successful.');
        
        
      } else {
        console.log(' failed. Please try again.');
        
      }
    } catch (error) {
      console.log('hisadd')
      console.error('An error occurred:', error.message);
      
    }

    setForgotEmail('');
    
  };

   const handleForgotPasswordClick = () => {
    setforgotPassword(true);
  };
  
  const handleBackToLoginClick = () => {
    setforgotPassword(false);
  };
  return (
      <div className='login-body'>
          <img src={wave} className='wave-img  d-none d-md-block' />
           <div className="container">
            <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={LoginKey} className='login-key d-none d-lg-block d-md-block' />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12  login-form" >
                     

                    {!forgotPassword && (
  
      <form onSubmit={handleSubmit}>
        <div><FontAwesomeIcon icon={faUser} className='icon'/></div>
        <h2 className="title">Welcome</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p onClick={handleForgotPasswordClick}>Forgot Password?</p>
      </form>
    
            )}
  {forgotPassword &&   (
   
      <form onSubmit={handleforgotpasswordsubmit}>
        <h4 className="title">Forgot Password</h4>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder='Enter your email'
              onChange={(e) => setForgotEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
        <p onClick={handleBackToLoginClick}>Back to Login</p>
      </form>
  
 ) }
                </div>
            </div>
        </div>
          
    </div>
  )
}

export default LoginPage;