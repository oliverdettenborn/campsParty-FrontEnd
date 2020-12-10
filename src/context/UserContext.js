import React, { createContext, useState } from 'react';
import useLocalStorage from '../hook/useLocalStorage';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUser] = useLocalStorage('@campsParty', {});
  const [chosenHotel, setChosenHotel] = useState({
    name: '',
    price: ''
  });

  const value = {
    user,
    setUser,
    chosenHotel,
    setChosenHotel
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
}