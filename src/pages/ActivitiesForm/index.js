import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import axios from 'axios';

import FormContext from '../../context/FormContext';
import ActivitiesOfTheDay from './ActivitiesOfTheDay';

export default function ActivitiesChoosing() {
  const days = ['friday', 'saturday', 'sunday'];
  const { chosenActivitiesCounter, setChosenActivitiesCounter, chosenActivities } = useContext(FormContext);

  const sendChosenActivities = () => {
    axios
      .post('http://localhost:4000/event/activities', chosenActivities) // colocar token
      .catch(err => console.log(err))
  }

  return (
    <>
      <Container>
        <LeftColumn>
          <Message>Chegou a hora de escolher suas atividades!</Message>
        </LeftColumn>
  
        <MainContent userHasFinished={chosenActivitiesCounter === 9}>
          {
            days.map((d, i) => (
              <ActivitiesOfTheDay
                key={i}
                day={d}
                countOneChoice={() => { chosenActivitiesCounter < 9 && setChosenActivitiesCounter(chosenActivitiesCounter + 1) }}
              />
            ))
          }

          <Link to='/participante' onClick={sendChosenActivities}>Concluir</Link>
        </MainContent>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 30%;

  @media (max-width: 700px) {
    padding-left: 0;
  }
`;

const LeftColumn = styled.aside`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 30%;
  background-color: #34D1BF;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 700px) {
    display: none;
  }
`;

const Message = styled.span`
  font-family: 'Chelsea Market', cursive;
  font-size: 28px;
  line-height: 40px;
  color: white;
  text-align: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  background: #EFEFEF;

  & > a {
    color: white;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ userHasFinished }) => css`
      pointer-events: ${userHasFinished ? 'initial' : 'none'};
      background: ${({ userHasFinished }) => userHasFinished ? 'green' : 'gray'};
    `}
  }
`;