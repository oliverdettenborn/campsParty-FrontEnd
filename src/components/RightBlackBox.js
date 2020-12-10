import React from 'react';
import styled from 'styled-components';
import { media } from '../assets/query';

export default function RigthBlackBox(props) {
  return (
    <Container onClick={props.onClick}>
      <Logo src='/favicon.ico'/>
      {props.children}
    </Container>
  );
}

const Container = styled.section`
  width: 70%;
  height: 100%;
  margin-left: 30%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  ${media}{
    width: 95%;
    margin: 0 auto;
    margin-top: 20%;
  }
`;

const Logo = styled.img`
  width: 65px;
  height: 65px;
  position: absolute;
  top: 25px;
  right: 25px;

  ${media}{
    width: 45px;
    height: 45px;
  }
`;