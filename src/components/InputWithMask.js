import React from 'react';
import Input from './Input';
import InputMask from 'react-input-mask';

export default function InputWithMask(props) {
  return (
      <InputMask 
        value={props.value} 
        onChange={props.onChange}
        placeholder={props.placeholder}
        type='text'
        mask={props.mask}
        required
      >
        {(inputProps) => <Input {...inputProps} type="text" disableUnderline />}
      </InputMask>
  )
};