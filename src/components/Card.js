import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  return (
    <StyledBox 
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      background={props.background}
      color={props.color}
    >
      {props.children}
    </StyledBox>
  )
};

const StyledBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  border: ${(props) => props.border || 'none'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  color: ${(props) => props.color || '#EFEFEF'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.001em;

  svg{
    font-size: 35px;
    margin-bottom: 10px;
  }
`;