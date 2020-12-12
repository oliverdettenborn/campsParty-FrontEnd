import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BlueBox } from '../../components';
import { media } from '../../assets/query';


export default function Aside() {
  return (
    <>
      <BlueBox>
          <Container>
              <Title> Acesse sua área do participante e complete sua inscrição </Title>
          </Container>
      </BlueBox>
      <SignInLink to= '/pre-inscricao'> Ainda não fez sua pré-inscrição ? </SignInLink>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
  position: relative;
`;
const SignInLink = styled(Link)`
  font-size: 15px;
  text-align: center;
  color: #EFEFEF;
  margin-bottom: 10px;
  position: fixed;
  bottom: 20px;
  left: 1.5%;
  text-align: center;
  width: calc(30% - 30px);
  z-index: 11;

  :hover {
    text-decoration: underline;
  }

  ${media}{
    width: 100%;
    left: initial;
    bottom: 10%;
    position: absolute;
  }
`;
const Title = styled.h2`
  font-size: 30px;
  font-family: 'Chelsea Market', cursive;
  color: #EFEFEF;
  text-align: center;
`;

