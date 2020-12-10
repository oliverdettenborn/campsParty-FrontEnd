import React from 'react';
import styled from 'styled-components';
import { Input, Error, Button, InputWithMask, Select } from '../../components/';

export default function Form(props) {
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
          <option value="none">Sem Acomodação</option>
          <option value="tent">Alojamento (barracas)</option>
          <option value="hotel">Hotel Parceiro</option>
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

