import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  return (
    <StyledButton 
      onClick={props.onClick}
      type={props.type}
      width={props.width}
      height={props.height}
      disabled={props.disabledButton}
    >
      {props.disabledButton
        ? 'Carregando...'
        : props.children
      }
    </StyledButton>
  )
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #D1345B;
  border: none;
  border-radius: 10px;
  font-family: 'Chelsea Market', cursive;
  font-size: 22px;
  line-height: 28px;
  color: #EFEFEF;
  margin-top: 10px;
  text-align: center;
  outline: none;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;