import React from 'react';
import styled from 'styled-components';
import { Input, Error, Button } from '../../components/';

export default function Form(props) {
  const { 
    handleSignUp,
    cpf,
    setCpf,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    disabledButton
  } = props;

  return (
    <Container onSubmit={handleSignUp}>
        <Input 
            type='text'
            placeholder='Cpf'
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
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

  @media (max-width: 600px) {
      width: 100%;
      margin-top: 30px;
      padding: 15px;
      margin-top: 25px;
  }
`;

