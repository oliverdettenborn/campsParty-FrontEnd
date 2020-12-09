import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  return (
    <StyledInput 
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      required
    />
  )
};

const StyledInput = styled.input`
  background: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  font-family: 'Chelsea Market', cursive;
  font-size: 22px;
  line-height: 28px;
  color: #070707;
  border: none;
  padding-left: 15px;
  outline: none;
`;