import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';
import styled from 'styled-components';
import { Card } from '../../components';
import Line from './Line';
import { media } from '../../assets/query';

export default function ResumeDataUser() {
  const { chosenActivities } = useContext(FormContext);
  return (
    <Card width='80%' background='#efefef'>
      <Description>Sexta - 22/01/2021</Description>
      <Line label='Manhã' value={`${chosenActivities.friday.morning}`} />
      <Line label='Tarde' value={`${chosenActivities.friday.afternoon}`} />
      <Line label='Noite' value={`${chosenActivities.friday.night}`} />

      <Description>Sábado - 23/01/2021</Description>
      <Line label='Manhã' value={`${chosenActivities.saturday.morning}`} />
      <Line label='Tarde' value={`${chosenActivities.saturday.afternoon}`} />
      <Line label='Noite' value={`${chosenActivities.saturday.night}`} />

      <Description>Domingo - 24/01/2021</Description>
      <Line label='Manhã' value={`${chosenActivities.sunday.morning}`} />
      <Line label='Tarde' value={`${chosenActivities.sunday.afternoon}`} />
      <Line label='Noite' value={`${chosenActivities.sunday.night}`} />
    </Card>
  )
}

const Description = styled.p`
  align-self: flex-start;
  width: 280px;
  max-width: 100%;
  height: 50px;
  background: #D1345B;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 12px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${media}{
    font-size: 14px;
    width: 60%;
    height: 25px;
  }
`;