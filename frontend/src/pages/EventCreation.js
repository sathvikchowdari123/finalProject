import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EventCreation = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [starttime, setstartTime] = useState('');
  const [endtime, setendTime] = useState('');
  const [location, setLocation] = useState('');
  const [seats, setSeats] = useState('');
    
    const handleSubmit = async (e) => {
    e.preventDefault();



    
    if (!name || !description || !date || !starttime || !location||!endtime||!seats) {
      // Handle validation error (e.g., display error message)
      console.log('All fields are required');
      return;
    }

    try {
      // Send data to the server (assuming you're using Axios)
      console.log('hiii from event creation')
      const response = await axios.post('http://localhost:3001/event-register', { name, location, date, seats, starttime, endtime, description });
      console.log(response)
      console.log('Event registered successfully:', response.data);
      if (response.status === 200) {
         toast.success('event created successfull')
      }
     
      
    } catch (error) {
      // Handle error (e.g., display error message)
      toast.error('an error occurred');
      console.error('Error adding event:', error);
    }
  };
  return (
     <div className="user-container">
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6">
          <div className="card custom-card">
                <div className="card-body" >
                 <div></div>
              <h5 className="card-title">Event Creation</h5>
              <form onSubmit={handleSubmit} style={{width:'100%'}}>
                <div className="row"  >
                  <div className="col-lg-6 col-md-6 ">
                    <div className="form-group">
                      
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                   <input
                        type="text"
                        className="form-control"
                        id="location"
                        value={location}
                         placeholder='Location'
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                     
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                         placeholder='Date'
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        id="Seats"
                        value={seats}
                         placeholder='Seats'
                        onChange={(e) => setSeats(e.target.value)}
                        required
                      />
                     
                    </div>
                  </div>
                </div>
                 <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                       <label htmlFor="time">Start Time</label>
                        <input
                            type="time"
                            className="form-control"
                            id="starttime"
                            value={starttime}
                            onChange={(e) => setstartTime(e.target.value)}
                            required
                        />
                     
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    
                    <div className="form-group">
                        <label htmlFor="time">End Time</label>
                        <input
                        type="time"
                        className="form-control"
                        id="endtime"
                        value={endtime}
                         placeholder='End time'
                        onChange={(e) => setendTime(e.target.value)}
                        required
                      />
                     
                    </div>
                  </div>
                
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                       <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                         placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                     
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
  )
}

export default EventCreation;