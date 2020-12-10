import React from 'react';
import styled from 'styled-components';
import { Input, Error, Button } from '../../components/';

export default function Form(props) {
  const { 
    handleSignIn,
    email,
    setEmail,
    password,
    setPassword,
    error,
    disabledButton
  } = props;

  return (
    <Container onSubmit={handleSignIn}>
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
      
      {error && <Error>{error}</Error>}
      <Button
          width='80%'
          height='50px'
          type='submit'
          disabledButton={disabledButton}
      >
          Completar Inscrição
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
  height: 350px;
  background: #34d1bf;
  border-radius: 15px;
  padding: 30px 60px;
  align-self: center;
  margin: 60px 0px 20px 0px;

  @media (max-width: 600px) {
      width: 100%;
      margin-top: 30px;
      padding: 15px;
      margin-top: 25px;
  }
`;

