

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ email: null, role: null });

  const setUser = (email, role) => {
    setUserInfo({ email, role });
  };

  return (
    <UserContext.Provider value={{ userInfo, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
