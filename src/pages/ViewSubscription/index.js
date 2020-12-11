import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import styled from 'styled-components';
import { media } from '../../assets/query';


import { PageTwoColumn, RightBlackBox, Title, MenuParticipant } from '../../components';
import ResumeDataUser from './ResumeDataUser';
import ResumeActivitiesUser from './ResumeActivitiesUser';

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
          Resumo da sua inscrição no evento:
        </Description>
        <Container>
          {
            (user.completeRegistration === true) &&
            <ResumeDataUser />
          }
          {
            (!user.choosedActivities === true) &&
            <ResumeActivitiesUser />
          }
        </Container>
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
    font-size: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > div {
    margin: 15px 0;
    padding: 25px;
  }
  ${media}{
    & > div {
      padding: 5px;
    }
  }
`;