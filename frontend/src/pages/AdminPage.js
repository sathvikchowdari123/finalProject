import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from 'react';

import AddUser from './AddUser';
const AdminPage = () => {
  const { role } = useParams();
   const [selectedField, setSelectedField] = useState('events');
 const renderContent = () => {
    switch (selectedField) {
      case 'user creation':
        return <AddUser/>;
     
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