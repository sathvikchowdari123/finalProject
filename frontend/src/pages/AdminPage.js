import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import AddResource from '../components/AddResource';
import AddUser from './AddUser';
import EventsPage from '../components/EventsPage';
import EventCreation from './EventCreation'
const AdminPage = () => {
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
  return (
    
    <div>
      <Navbar onSelectField={setSelectedField} role={role} />
      {renderContent()}
    </div>
  )
}

export default AdminPage;