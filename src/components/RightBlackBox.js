import React from 'react';
import styled from 'styled-components';
import { media } from '../assets/query';

export default function RigthBlackBox(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

const Container = styled.section`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;

    ${media}{
        width: 95%;
        margin: 0 auto;
        margin-top: 15%;
    }
`;

