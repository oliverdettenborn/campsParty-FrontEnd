import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import FormContext from '../../context/FormContext';
import { PageTwoColumn, RightBlackBox, MenuParticipant } from '../../components';

export default function AccomodationEdit() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { formData, setFormData } = useContext(FormContext);
  const [ togleMenu, setTogleMenu ] = useState(false);
  const [ disabledButton, setDisabledButton ] = useState("");
  const [ error, setError ] = useState("");

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