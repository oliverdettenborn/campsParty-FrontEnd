import React from 'react';
import styled from 'styled-components';

export default function Error(props) {
  return (
    <StyledError>
      {props.children}
    </StyledError>
  )
};

const StyledError = styled.span`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Chelsea Market', cursive;
  font-size: 14px;
  line-height: 16px;
  color: red;
`;