import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function ParticipantPage() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  if(!user || !user.token){
    history.push('/login')
  }

  const { completeRegister, token } = user;

  return (
    <>
      teste
    </>
  )
}
