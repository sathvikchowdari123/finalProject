

import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('admin');

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      <BrowserRouter/>
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);

