import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(0);
  const { userInfo } = useUser();
  const [eventsRegistered, seteventsRegistered] = useState([])
  let [eventsLiked,seteventsLiked]=useState([])
  const role = userInfo.role;
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [likestatus, setlikestatus] = useState(false);

  const handleModalClose = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  const handleUpdateEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };
  useEffect(() => {
  
     console.log(userInfo.email)
     const fetchEvents = async () => {
       try {
         const response = await axios.get('http://localhost:3001/fetch-events');
         if (!response) {
           throw new Error('Failed to fetch events');
         }
         const data = await response.data;
        
         setEvents(data);
         
       }
       catch (error) {
         console.error(error);
       }
     };
     fetchEvents();
   }, [count]);
  
 useEffect(() => {
  const fetchEventsRegistered = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/fetch-events-registered?email=${userInfo.email}`);
      if (!response) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.data;
 
      seteventsRegistered(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (userInfo.email) {
    fetchEventsRegistered();
  }
}, [count]);
  
  
   useEffect(() => {
     const fetchEventsLiked = async () => {
    console.log('fron use effect')
    try {
      const response = await axios.get(`http://localhost:3001/fetch-events-liked?email=${userInfo.email}`);
      if (!response) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.data;
      const eventIds = data.map(event => event.eventId);
      seteventsLiked(eventIds);
    } catch (error) {
      console.error(error);
    }
  };

  if (userInfo.email) {
    fetchEventsLiked();
  }
}, []);
  
  const handleRegisterClick = async (eventId) => {
    
  try {
    const email = userInfo.email;
    console.log('type of eventId', typeof eventId);
    const response = await axios.post('http://localhost:3001/user/event-register', { email, eventId });
    if (response.status === 200) {
      console.log('successfully registered');
      const event = response.data;
      if (event.seats === event.filled) {
        const response = await axios.post('http://localhost:3001/liked-notification-interested', { eventId });
        if (response.status === 200) {
          console.log('notification send successfully');
        }
        else {
          console.log('error occurred while sending notifications');
        }
      }
      
      } else {
        console.log('registraion failed');
        
    }
    
    setCount(count+1)
    console.log("count from events")
    console.log(count)
  } catch (error) {
    console.error('An error occurred:', error.message);
 }

  };
  
const handleUpdateSubmit = async (e) => {
    e.preventDefault();
   

    try {
      // Send data to the server (assuming you're using Axios)
      const response = await axios.post('http://localhost:3001/event-update', selectedEvent);
     
      console.log('Event updated successfully:', response.data);
    alert('successfully updated')
      
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Error adding event:', error);
    }


  
  };
  const handleDeleteEvent = async (event) => {
    
    const eventIdToRemove = event._id;
    const updatedEvents = events.filter(event => event._id !== eventIdToRemove);
    setEvents(updatedEvents);
    console.log(updatedEvents)
    try {
      const response = await axios.post('http://localhost:3001/event-delete', { event })
      if (response.status === 200) {
        console.log('event deleted successfully');
        alert('event deleted successfully');
      }
    } catch (error) {
      console.error('error deleting event', error);
    }

  }

  const toggleLike = async (event) => {
      
    const eventId = event._id;
    
    
    if (eventsLiked.includes(event._id)) {
      eventsLiked = eventsLiked.filter(eventId => eventId !== event._id);
    console.log(eventsLiked);
          try {
    const email = userInfo.email;
    console.log('from remove')
    const response = await axios.post('http://localhost:3001/event-liked/remove', { email, eventId });
    if (response.status === 200) {
      console.log('successfully removed');
      
      } else {
        console.log('failed');
        
    }
    
    
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
      seteventsLiked(eventsLiked.filter(id => id !== eventId));

    }
    else {
      eventsLiked.push(event._id)
      console.log(eventsLiked);
       try {
    const email = userInfo.email;
    // console.log('from toggle event liked')
    const response = await axios.post('http://localhost:3001/event-liked', { email, eventId });
    if (response.status === 200) {
      console.log('successfully Liked');
      
      } else {
        console.log('failed');
        
    }
    
    
  } catch (error) {
    console.error('An error occurred:', error.message);
 }
      seteventsLiked([...eventsLiked, eventId]);
    }


      
  };

  return (
    <div className='event-body'>
      <h2>All Events</h2>
    <div className="row">
      {events.map((event, index) => (
        <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div className="card mb-3 event-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4>{event.name}</h4>
                {role === 'user' && (
                  <FontAwesomeIcon icon={faHeart} onClick={() => toggleLike(event)}
                  className={eventsLiked.includes(event._id) ? 'heart-icon-liked' : 'heart-icon'} />
                )}
                
              </div>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Time: {event.starttime}-{event.endtime}</p>
              <p>Seats: {event.seats}</p>
              <p>Filled: {event.filled}</p>
              <p>Description: {event.description}</p>
              {role === 'user' ? (
                event.filled === event.seats ? (
                  <p>Registration Completed</p>
                ) : (
                  eventsRegistered.some(item => item.eventId === event._id) ? (
                    <p>Registered</p>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={() => handleRegisterClick(event._id)}
                    >
                      Register
                    </button>
                  )
                )
              ) : (
                  <>
                <div className="event-button-container">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => handleUpdateEvent(event)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    onClick={() => handleDeleteEvent(event)}
                  >
                    Delete
                  </button>
                </div>
              </>

              )}
            </div>
          </div>
        </div>
      ))}
    
      {selectedEvent && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Event</h5>
                <button type="button" className="close" onClick={handleModalClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                  <form onSubmit={handleUpdateSubmit} style={{ width: '100%' }}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={selectedEvent.name}
                            placeholder='Name'
                           onChange={(e) => setSelectedEvent(prevState => ({
                            ...prevState,
                            name: e.target.value
                          }))}
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
                            value={selectedEvent.location}
                            placeholder='Location'
                            onChange={(e) => setSelectedEvent(prevState => ({
                            ...prevState,
                            location: e.target.value
                          }))}
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
                            value={selectedEvent.date}
                            placeholder='Date'
                            onChange={(e) => setSelectedEvent(prevState => ({
                            ...prevState,
                            date: e.target.value
                          }))}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            id="seats"
                            value={selectedEvent.seats}
                            placeholder='Seats'
                            onChange={(e) => setSelectedEvent(prevState => ({
                            ...prevState,
                            seats: e.target.value
                          }))}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor="starttime">Start Time</label>
                          <input
                            type="time"
                            className="form-control"
                            id="starttime"
                            value={selectedEvent.starttime}
                            onChange={(e) => setSelectedEvent(prevState => ({
                            ...prevState,
                            starttime: e.target.value
                          }))}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor="endtime">End Time</label>
                          <input
                            type="time"
                            className="form-control"
                            id="endtime"
                            value={selectedEvent.endtime}
                            placeholder='End time'
                            onChange={(e) => setSelectedEvent(prevState => ({
                            ...prevState,
                            endtime: e.target.value
                          }))}
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
                            value={selectedEvent.description}
                            placeholder='Description'
                            onChange={(e) => setSelectedEvent(prevState => ({
                            ...prevState,
                            description: e.target.value
                          }))}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>

              <div className="modal-footer">
                
                
              </div>
            </div>
          </div>
        </div>
      )}
        
    </div>
    </div>
  )
}

export default EventsPage;