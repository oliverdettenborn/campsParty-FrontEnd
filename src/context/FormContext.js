import React, { createContext, useState } from 'react';

const FormContext = createContext();

export default FormContext;

export function FormProvider(props) {
  const [ formData, setFormData ] = useState({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {props.children}
    </FormContext.Provider>
  );
}