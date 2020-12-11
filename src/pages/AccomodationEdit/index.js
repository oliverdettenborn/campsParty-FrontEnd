import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import FormContext from '../../context/FormContext';
import { PageTwoColumn, RightBlackBox, MenuParticipant, HotelItem } from '../../components';
import FormChangeTicketType from './FormChangeTicketType'

export default function AccomodationEdit() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { hotelsList} = useContext(FormContext);
  const [ togleMenu, setTogleMenu ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ disabledButton , setDisabledButton ] = useState(false);
  const [ ticketType, setTicketType ] = useState(user.ticketType);
  const [ viewHotels, setViewHotels ] = useState(false);


  if(!user || !user.token){
    history.push('/login')
  }

  function handleChangeTicketType(e){
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/users/ticketType`, { ticketType }, {headers: {"Authorization": `Bearer ${user.token}`}})
      .then(response => {
        setUser({...user, ticketType: response.data.ticketType});
        if(ticketType === "hotel"){
          setViewHotels(true);
        }else{
          history.push('/participante')
        }
      })
      .catch((err) => {
        if (err && err.response.status === 422) { 
          setError('Preencha corretamente os campos');
        } else if (err && err.response.status === 401) {
          setError('Usuário não logado');
          setUser({});
          history.push('/login');
        } else {
          setError('Houve um erro desconhecido ao cadastrar, tente novamente');
        }
        setDisabledButton(false);
      })
  }
  
  return (
    <PageTwoColumn>
      <MenuParticipant setTogleMenu={setTogleMenu} togleMenu={togleMenu}/>
      <RightBlackBox onClick={() => setTogleMenu(false)}>
        <FormChangeTicketType 
          error={error}
          disabledButton={disabledButton}
          handleChangeTicketType={handleChangeTicketType}
          ticketType={ticketType}
          setTicketType={setTicketType}
        />
        {
          viewHotels &&
          <Container>
            <h2>Agora, escolha o hotel para se hospedar:</h2>
            {hotelsList.map(h => <HotelItem key={h.id} hotel={h} />)}
          </Container>
        }
      </RightBlackBox>
    </PageTwoColumn>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  background: #34d1bf;
  border-radius: 15px;
  padding: 30px 60px;
  align-self: center;
  margin: 20px 0px 20px 0px;
  color: #EFEFEF;
  padding: 30px;

  h2{
    text-align: center;
    font-size: 24px;
    margin-bottom: 15px;
  }
`;