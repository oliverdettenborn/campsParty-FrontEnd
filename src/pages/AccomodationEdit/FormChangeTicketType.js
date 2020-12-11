import React, { useContext } from 'react';
import styled from 'styled-components';
import { Error, Button, Select } from '../../components';
import FormContext from '../../context/FormContext';


export default function FormChangeTicketType(props) {
  const { hotelsList, notHotelList, loading } = useContext(FormContext);
  const { 
    error,
    handleChangeTicketType,
    disabledButton,
    ticketType,
    setTicketType,
  } = props;

  if(loading || hotelsList.length === 0){
    return <h2>Carregando...</h2>
  }

  return (
    <Container onSubmit={handleChangeTicketType}>
      <Select 
        name='ticketType' 
        id='ticketType' 
        value={ticketType}
        onChange={(e) => (e.target.value !== "0") && setTicketType(e.target.value)}
      >
        {
          notHotelList.map(item => <option value={item.type}>{item.name} - Preço: {item.price}</option>)
        }
        <option value='hotel'>Hotel Parceiro - Preço: {hotelsList[0].price}</option>
      </Select>
      {error && <Error>{error}</Error>}
      <Button
        width='80%'
        height='50px'
        type='submit'
        disabledButton={disabledButton}
      >
        {
          ticketType === 'hotel' ? 'Escolher hotel' : 'Editar acomodação'
        }
      </Button>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  background: #34d1bf;
  border-radius: 15px;
  padding: 30px 60px;
  align-self: center;
  margin: 50px 0px 20px 0px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 30px;
    padding: 15px;
    margin-top: 25px;
  }
`;