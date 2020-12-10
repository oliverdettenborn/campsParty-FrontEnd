import React from 'react';
import InputMask from 'react-input-mask';

export default function InputWithMask(props) {
  return (
      <InputMask 
        value={props.value} 
        onChange={props.onChange}
        placeholder={props.placeholder}
        type='text'
        mask={props.mask}
        style={styledInput}
        required
      />
  )
};
const styledInput = {
  background: "#EFEFEF",
  borderRadius: "15px",
  height: "60px",
  marginBottom: "15px",
  fontFamily: "'Chelsea Market', cursive",
  fontSize: "22px",
  lineHeight: "28px",
  color: "#070707",
  border: "none",
  paddingLeft: "15px",
  outline: "none",
};