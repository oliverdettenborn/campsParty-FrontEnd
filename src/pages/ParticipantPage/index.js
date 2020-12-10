import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import styled from 'styled-components';
import { media } from '../../assets/query';


import { PageTwoColumn, RightBlackBox, Title, OptionsActivities, Button, MenuParticipant } from '../../components'

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
        <Description>
          O maior evento de programação irá acontecer nos dias nos dias 22, 23 e 24 de janeiro. e contará com 4 trilhas:
        </Description>
        <OptionsActivities list={["Gaming", "Hacking", "Makers", "Startups"]}/>
        {
          (user.completeRegistration === true)
          ? (<Text>Parabéns, sua inscrição foi completada com sucesso!</Text>)
          : (<Button
                onClick={() => history.push('/participante/dados')}
                width='315px'
                height='60px'
              >Completar inscrição!</Button>)
        }
        
      </RightBlackBox>
    </PageTwoColumn>
  )
}

const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.001em;
  color: #EFEFEF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 81px;
  margin-top: 30px;

  ${media}{
    font-size: 18px;
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.001em;
  color: #D1345B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 81px;
  margin-top: 30px;
`;