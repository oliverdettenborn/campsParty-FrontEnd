import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { PageTwoColumn, RightBlackBox, MenuParticipant } from '../../components';

export default function AccomodationEdit() {
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
        teste
      </RightBlackBox>
    </PageTwoColumn>
  )
}