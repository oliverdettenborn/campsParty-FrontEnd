import React from 'react';
import styled from 'styled-components';

export default function Title() {
  return (
    <StyledTitle>
      Camps Party
    </StyledTitle>
  )
};

const StyledTitle = styled.h1`
  font-family: 'Chelsea Market', cursive;
  font-size: 48px;
  line-height: 50px;
  color: #EFEFEF;
  text-align: center;
  margin: 15px;

  @media (max-width: 600px) {
    font-size: 38px;
  }
`;