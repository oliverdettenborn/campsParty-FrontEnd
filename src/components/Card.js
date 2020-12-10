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

const StyledBox = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  border: ${(props) => props.border || 'none'};
  border-radius: 15px;
  color: ${(props) => props.color || '#EFEFEF'};
`;