import React from 'react';
import styled from 'styled-components';

export default function Select(props) {
  return (
    <BoxSelect name={props.name} id={props.id} value={props.value} onChange={props.onChange} required>
      <option value="0" className="label">{props.placeholder}</option>
      {props.children}
    </BoxSelect>
  )
};

const BoxSelect = styled.select`
  background: #EFEFEF;
  border-radius: 15px;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  font-family: 'Chelsea Market', cursive;
  font-size: 22px;
  line-height: 28px;
  color: rgba(7,7,7,0.5);
  border: none;
  padding-left: 15px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none; 
  appearance: none; 
  cursor: pointer;
  :after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
`;