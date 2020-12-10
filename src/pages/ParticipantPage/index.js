import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

import Aside from './Aside';

export default function ParticipantPage() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  // if(!user){
  //   history.push('/login')
  // }

  const { completeRegister, token } = user;

  return (
    <>
      
    </>
  )
}
