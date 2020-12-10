import React from 'react';
import styled from 'styled-components';
import { media } from '../assets/query';

export default function SignIn(props) {
  return (
    <Main>
      {props.children}
    </Main>
  );
}

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    ${media}{
        flex-direction: column-reverse;
    }
`;
