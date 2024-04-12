import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState,useEffect } from 'react';
import AddResource from '../components/AddResource';
import AddUser from './AddUser';
import EventsPage from '../components/EventsPage';
import EventCreation from './EventCreation'
import { useNavigate } from 'react-router-dom';
const AdminPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
    // Check if user details are available in local storage
    const userData = localStorage.getItem('user');
    console.log('from home page')
    if (!userData) {
      // Redirect to login page or another appropriate location if user details are not available
      console.log('unauthorized access')
      navigate('/');
    }
  }, [navigate]);
  const { role } = useParams();
   const [selectedField, setSelectedField] = useState('events');
 const renderContent = () => {
    switch (selectedField) {
      case 'user creation':
        return <AddUser />;
      case 'Add Resource':
        return <AddResource/>;
      case 'events':
        return <EventsPage />;
      case 'event creation':
        return <EventCreation/>
      default:
        return null;
    }
  };
    if (!localStorage.getItem('user')) {
    return null;
  }
  return (
    
    <div>
      <Navbar onSelectField={setSelectedField} role={role} />
      {renderContent()}
    </div>
  )
}

export default AdminPage;