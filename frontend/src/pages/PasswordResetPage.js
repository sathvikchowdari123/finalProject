import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const PasswordResetPage = () => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');
 const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
       
      
       if (!password || !confirmpassword) {
      console.log('Please fill in all fields.');
      return;
    }

    try {
      
      const response = await axios.post(`http://localhost:3001/change-password/${id}`, { id, password,confirmpassword });

    
      if (response.status === 200) {
          console.log('pasword reset successful');
         
      
        //   navigate('/');
        
      } else {
        console.log('Lfailed. Please try again.');
        
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
      
    }

  
      setPassword('');
      setconfirmPassword('');


  };
    return (
      <div className="user-container">
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6">
          <div className="card custom-card">
                <div className="card-body" >
                
              <h5 className="card-title">Change Password</h5>
              <form onSubmit={handleSubmit} style={{width:'100%'}}>
              <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            placeholder='New Password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </div>
                      <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            value={confirmpassword}
                            placeholder='Confirm Password'
                            onChange={(e) => setconfirmPassword(e.target.value)}
                            required
                        />
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

export default PasswordResetPage;