import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';
import UserContext from '../../context/UserContext';

import { Card } from '../../components';
import Line from './Line';

export default function ResumeDataUser() {
  const { formData, hotelsList } = useContext(FormContext);
  const { user } = useContext(UserContext);


  return (
    <Card width='80%' background='#efefef'>
      <Line label='Nome' value={`${formData.name} ${formData.lastName}`} />
      <Line label='CPF' value={`${user.cpf}`} />
      <Line label='Email' value={`${user.email}`} />
      <Line label='Sexo' value={`${(formData.gender === 'M') ? 'Masculino' : (formData.gender === 'F' ? 'Feminino' : 'Prefiro não informar')}`} />
      <Line label='Endereço' value={`${formData.address},${formData.numberAddress} - ${formData.addOnAddress || ""}`} />
      <Line label='Cidade' value={`${formData.city}/${formData.uf}`} />
      <Line label='Cep' value={`${formData.postalCode}`} />
      <Line label='Tipo do ingresso' value={`${(user.ticketType === 'hotel') ? 'Hotel Parceiro' : (user.ticketType === 'tent' ? 'Alojamento' : 'Sem alojamento')}`} />
      <Line label='Valor do ingresso' value={`${formData.admissionCost}`} />
      {(user.ticketType === 'hotel') &&
        <Line label='Hotel' value={`${hotelsList.find(h => h.id === formData.accommodationId).name}`} />
      }
    </Card>
  )
}