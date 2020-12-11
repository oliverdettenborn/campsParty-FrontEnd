import React, { useContext } from 'react';
import styled from 'styled-components';
import { Input, Error, Button, InputWithMask, Select } from '../../components/';
import FormContext from '../../context/FormContext';

export default function Form(props) {
  const { hotelsList, notHotelList, loading } = useContext(FormContext);
  const { 
    handleSignUp,
    cpf,
    setCpf,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    error,
    disabledButton,
    ticketType,
    setTicketType
  } = props;

  if(loading || hotelsList.length === 0){
    return <h2>Carregando...</h2>
  }

  return (
    <Container onSubmit={handleSignUp}>
        <InputWithMask
            type='text'
            placeholder='Cpf'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            mask='999.999.999-99'
        />
        <Input 
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
            type='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Input 
            type='password'
            placeholder='Confirme a senha'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Select 
          name='ticketType' 
          id='ticketType' 
          placeholder='Escolha o tipo de ingresso'
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
          Quero Participar
        </Button>
        
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: 500px;
  background: #34d1bf;
  border-radius: 15px;
  padding: 30px 60px;
  align-self: center;
  margin: 30px 0px 20px 0px;

  input{
    width: 100%;
  }

  @media (max-width: 600px) {
      width: 100%;
      margin-top: 30px;
      padding: 15px;
      margin-top: 25px;
  }
`;

