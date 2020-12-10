import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import styled from 'styled-components';


import { PageTwoColumn, RightBlackBox, Title, MenuParticipant, Select } from '../../components'

export default function ParticipantPage() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [ togleMenu, setTogleMenu ] = useState(false);

  if(!user || !user.token){
    history.push('/login')
  }

  return (
    <PageTwoColumn>
      <MenuParticipant setTogleMenu={setTogleMenu} togleMenu={togleMenu}/>
      <RightBlackBox onClick={() => setTogleMenu(false)}>
        <Title />
        
      </RightBlackBox>
    </PageTwoColumn>
  )
}