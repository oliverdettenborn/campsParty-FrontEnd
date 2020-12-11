import React from 'react';
import styled from 'styled-components';
import { Input, Error, Button, InputWithMask, Select } from '../../components/';

export default function Form(props) {
  const { 
    error,
    handleSubscription,
    name,
    setName,
    lastName,
    setLastName,
    address,
    setAddress,
    numberAddress,
    setNumberAddress,
    addOnAddress,
    setAddOnAddress,
    city,
    setCity,
    uf,
    setUf,
    postalCode,
    setPostalCode,
    gender,
    setGender,
    phone,
    setPhone,
    disabledButton,
    ticketType
  } = props;

  return (
    <Container onSubmit={handleSubscription}>
      <TwoColumn>
        <Input 
          type='text'
          placeholder='Nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          type='text'
          placeholder='Sobrenome'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </TwoColumn>
      <Input 
        type='text'
        placeholder='Endereço'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TwoColumn>
        <Input 
          type='text'
          placeholder='Número'
          value={numberAddress}
          onChange={(e) => setNumberAddress(e.target.value)}
        />
        <Input 
          type='text'
          placeholder='Complemento'
          value={addOnAddress}
          onChange={(e) => setAddOnAddress(e.target.value)}
        />
      </TwoColumn>
      <Input 
        type='text'
        placeholder='Cidade'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <TwoColumn>
        <InputWithMask 
          type='text'
          placeholder='Estado'
          value={uf}
          mask='aa'
          onChange={(e) => setUf(e.target.value)}
        />
        <InputWithMask 
          type='text'
          placeholder='CEP'
          value={postalCode}
          mask='99999-999'
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </TwoColumn>
      <TwoColumn>
        <Select 
          name='ticketType' 
          id='ticketType' 
          placeholder='Sexo'
          value={gender}
          onChange={(e) => (e.target.value !== "0") && setGender(e.target.value)}
        >
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
          <option value="NI">Prefiro não informar</option>
        </Select>
        <InputWithMask 
          type='text'
          placeholder='Telefone'
          value={phone}
          mask='(99) 99999-9999'
          onChange={(e) => setPhone(e.target.value)}
        />
      </TwoColumn>
      {error && <Error>{error}</Error>}
      <Button
        width='80%'
        height='50px'
        type='submit'
        disabledButton={disabledButton}
      >
        {
          ticketType === 'hotel' ? 'Escolher hotel' : 'Finalizar inscrição'
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
  width: 75%;
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

const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  input,select{
    width: 48%;
  }
`;