import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import EventsPage from '../components/EventsPage';
const HomePage = () => {
  const { role } = useParams();
   const [selectedField, setSelectedField] = useState('events');
 const renderContent = () => {
    switch (selectedField) {
      case 'events':
        return <EventsPage />;
     
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

export default HomePage;