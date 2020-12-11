import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ActivitiesOfTheDay from './ActivitiesOfTheDay';
import { PageTwoColumn, RightBlackBox, Button, MenuParticipant } from '../../components';
import { media } from '../../assets/query';

export default function ActivitiesChoosing() {
  let [choicesCounter, setChoicesCounter] = useState(0);
  const days = ['friday', 'saturday', 'sunday'];
  const [ togleMenu, setTogleMenu ] = useState(false);

  function submitActivities(){

  }

  return (
    <PageTwoColumn>
      <MenuParticipant setTogleMenu={setTogleMenu} togleMenu={togleMenu} />
      <RightBlackBox onClick={() => setTogleMenu(false)}>
        <Message>Chegou a hora de escolher suas atividades!</Message>
        <MainContent userHasFinished={choicesCounter === 9}>
          {
            days.map((d, i) => (
              <ActivitiesOfTheDay
                key={i}
                day={d}
                countOneChoice={() => { choicesCounter < 9 && setChoicesCounter(choicesCounter + 1) }}
              />
            ))
          }

          <Button onClick={submitActivities} width='35%' height='60px'>
            Concluir
          </Button>
        </MainContent>
      </RightBlackBox>
    </PageTwoColumn>
  )
}

const Message = styled.span`
  font-family: 'Chelsea Market', cursive;
  font-size: 28px;
  line-height: 40px;
  color: white;
  text-align: center;
  border-bottom: 1px solid #EFEFEF;
  width:74%;
  padding-bottom: 15px;
`;

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

    ${({ userHasFinished }) => css`
      pointer-events: ${userHasFinished ? 'initial' : 'none'};
      background: ${({ userHasFinished }) => userHasFinished ? 'green' : 'gray'};
    `}
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