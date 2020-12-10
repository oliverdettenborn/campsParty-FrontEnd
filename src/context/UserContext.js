import React, { createContext, useState } from 'react';
import useLocalStorage from '../hook/useLocalStorage';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUser] = useLocalStorage('@campsParty', {});
  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  );
}