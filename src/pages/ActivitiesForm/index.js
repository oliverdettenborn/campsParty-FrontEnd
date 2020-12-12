import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import axios from 'axios';

import FormContext from '../../context/FormContext';
import UserContext from '../../context/UserContext';
import ActivitiesOfTheDay from './ActivitiesOfTheDay';
import { PageTwoColumn, RightBlackBox, MenuParticipant, Button, Error } from '../../components';
import { media } from '../../assets/query';

export default function ActivitiesChoosing() {
  const [ togleMenu, setTogleMenu ] = useState(false);
  const { chosenActivities } = useContext(FormContext);
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const [ disabledButton, setDisabledButton ] = useState(true);
  const [ error, setError ] = useState("");
  const days = ['friday', 'saturday', 'sunday'];


  useEffect(() => {
    const momentsOfTheDay = ['morning', 'afternoon', 'night'];
    let counter = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          const weekDay = days[i];
          const hourOfTheDay = momentsOfTheDay[j];

          if (chosenActivities[weekDay][hourOfTheDay]) counter++;
      }
    }
    console.log(counter);

    (counter === 9) && setDisabledButton(false);
  }, [chosenActivities]);

  function sendChosenActivities(){
    if(disabledButton) return;
    setDisabledButton(true);

    axios({
      method: user.choosedActivities ? 'put' : 'post',
      url: `${process.env.REACT_APP_API_URL}/api/event/users/activities`,
      chosenActivities,
      headers: {"Authorization": `Bearer ${user.token}`}
    })
    .then(() => {
      setUser({...user, choosedActivities: true})
      history.push('/participante')
    })
    .catch(err => {
      if (err.response.status === 422) { 
        setError('Preencha corretamente os campos');
      } else if (err.response.status === 401) {
        setError('Usuário não logado');
        setUser({});
        history.push('/login');
      } else {
        setError('Houve um erro ao cadastrar');
      }
      setDisabledButton(false);
    });
  }

  return (
    <PageTwoColumn>
      <MenuParticipant setTogleMenu={setTogleMenu} togleMenu={togleMenu} />
      <RightBlackBox onClick={() => setTogleMenu(false)}>
      <MainContent>
          {
            days.map((d, i) => (
              <ActivitiesOfTheDay
                key={i}
                day={d}
              />
            ))
          }
          <Button
            disabledButton={disabledButton}
            onClick={sendChosenActivities}
            width='60%'
            height='50px'
          >
            Concluir
          </Button>

          {error && <Error>{error}</Error>}
        </MainContent>
      </RightBlackBox>
    </PageTwoColumn>
  )
}

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  background: #EFEFEF;
  width: 75%;
  border-radius: 15px;
  margin-top: 40px;

  & > a {
    color: white;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  button{
    margin: 0 auto;
  }

  ${media}{
    width: 90%;
    padding: 20px 10px;

    button{
      width: 60%;
      height: 40px;
    }
  }
`;