import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import FormContext from '../../context/FormContext';
import axios from 'axios';
import { PageTwoColumn, RightBlackBox, MenuParticipant } from '../../components';
import Form from './Form';

export default function FormUser() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { formData, setFormData, notHotelList } = useContext(FormContext);
  const [ togleMenu, setTogleMenu ] = useState(false);
  const [ disabledButton, setDisabledButton ] = useState("");
  const [ error, setError ] = useState("");

  const [ name, setName ] = useState(formData.name || "");
  const [ lastName, setLastName ] = useState(formData.lastName || "");
  const [ address, setAddress ] = useState(formData.address || "");
  const [ numberAddress, setNumberAddress ] = useState(formData.numberAddress || "");
  const [ addOnAddress, setAddOnAddress ] = useState(formData.addOnAddress || "");
  const [ city, setCity ] = useState(formData.city || "");
  const [ uf, setUf ] = useState(formData.uf || "");
  const [ postalCode, setPostalCode ] = useState(formData.postalCode || "");
  const [ gender, setGender ] = useState(formData.gender || "");
  const [ phone, setPhone ] = useState(formData.phone || "");

  if(!user || !user.token){
    history.push('/login')
  }

  function handleSubscription(e){
    e.preventDefault();
    if(disabledButton) return;
    setDisabledButton(true);
    const data = {
      name,
      lastName,
      address,
      numberAddress,
      addOnAddress,
      city,
      uf,
      postalCode,
      gender,
      phone,
      accommodationId: (user.ticketType !== 'hotel') && String(notHotelList.find(e => e.type === user.ticketType).id),
      admissionCost: (user.ticketType !== 'hotel') && notHotelList.find(e => e.type === user.ticketType).price.split("R$ ")[1]
    }
    setFormData(data);

    if(user.ticketType === "hotel"){
      history.push('/participante/hospedagem')
    }else{
      axios({
        method: user.completeRegistration ? 'put' : 'post',
        url: `${process.env.REACT_APP_API_URL}/api/user/subscription`,
        data,
        headers: {"Authorization": `Bearer ${user.token}`}
      })
      .then(response => {
        history.push('/participante');
        setUser({...user, completeRegistration: response.data.user.completeRegistration});
        setFormData(response.data.subscription);
      })
      .catch(err => {
        if (err.response.status === 422) { 
          setError('Preencha corretamente os campos');
        } else if (err.response.status === 401) {
          setError('Usuário não logado');
          setUser({});
          history.push('/login');
        } else {
          setError('Houve um erro ao cadastrar');
        }
        setDisabledButton(false);
      });
    }
  }

  return (
    <PageTwoColumn>
      <MenuParticipant setTogleMenu={setTogleMenu} togleMenu={togleMenu}/>
      <RightBlackBox onClick={() => setTogleMenu(false)}>
        <Form 
          error={error}
          handleSubscription={handleSubscription}
          name={name}
          setName={setName}
          lastName={lastName}
          setLastName={setLastName}
          address={address}
          setAddress={setAddress}
          numberAddress={numberAddress}
          setNumberAddress={setNumberAddress}
          addOnAddress={addOnAddress}
          setAddOnAddress={setAddOnAddress}
          city={city}
          setCity={setCity}
          uf={uf}
          setUf={setUf}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          gender={gender}
          setGender={setGender}
          phone={phone}
          setPhone={setPhone}
          disabledButton={disabledButton}
          ticketType={user.ticketType}
        />
      </RightBlackBox>
    </PageTwoColumn>
  )
}