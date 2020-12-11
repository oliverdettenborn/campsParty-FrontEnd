import React, { createContext, useState } from 'react';

const FormContext = createContext();

export default FormContext;

export function FormProvider(props) {
  const [ formData, setFormData ] = useState({});
  const [chosenHotel, setChosenHotel] = useState({
    name: '',
    price: ''
  });

  const [chosenActivitiesCounter, setChosenActivitiesCounter] = useState(0);
  const [chosenActivities, setChosenActivities] = useState(
    {
      friday: {
        morning: '',
        afternoon: '',
        night: ''
      },
      saturday: {
        morning: '',
        afternoon: '',
        night: ''
      },
      sunday: {
        morning: '',
        afternoon: '',
        night: ''
      }
    }
  );

  const value = {
    chosenHotel,
    setChosenHotel,
    chosenActivities,
    setChosenActivities,
    formData, 
    setFormData,
    chosenActivitiesCounter,
    setChosenActivitiesCounter
  };
  return (
    <FormContext.Provider value={value}>
      {props.children}
    </FormContext.Provider>
  );
}