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
        ? '...'
        : props.children
      }
    </StyledButton>
  )
};

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${props => props.disabled ? 'gray' : '#D1345B'};
  border: none;

  font-family: 'Chelsea Market', cursive;
  font-size: 22px;
  line-height: 28px;
  color: #EFEFEF;
  margin-top: 10px;
  text-align: center;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;