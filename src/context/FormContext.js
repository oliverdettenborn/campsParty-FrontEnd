import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from './UserContext';

const FormContext = createContext();

export default FormContext;

export function FormProvider(props) {
  const { user } = useContext(UserContext)
  const [ formData, setFormData ] = useState({});
  const [hotelsList, setHotelsList] = useState([]);
  const [notHotelList, setNotHotelList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/partners/hotels`)
      .then(r => {
        setHotelsList(r.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.response);
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/partners/not-hotels`)
      .then(response => {
        setNotHotelList(response.data);
      })
      .catch(err => {
        console.log(err.response);
      });
    if(user.token){
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user/subscription`, { headers: {"Authorization": `Bearer ${user.token}`}})
        .then(response => {
          setFormData(response.data);
        })
        .catch(err => {
          console.log(err.response);
        });
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/event/activities/user`, { headers: {"Authorization": `Bearer ${user.token}`}})
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }, [user.token]);

  const value = {
    chosenActivities,
    setChosenActivities,
    formData, 
    setFormData,
    hotelsList,
    notHotelList,
    loading
  };
  return (
    <FormContext.Provider value={value}>
      {props.children}
    </FormContext.Provider>
  );
}