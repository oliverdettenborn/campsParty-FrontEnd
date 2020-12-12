import React from 'react';
import styled from 'styled-components';
import { media } from '../../assets/query';

export default function Line(props) {
  return (
    <Container>
      <Label>{props.label}:</Label>
      <Value>{props.value}</Value>
    </Container>
  )
}

const Label = styled.p`
  color: #070707;
  margin-right: 10px;
  text-align: start;
`;

const Value = styled.p`
  color: #D1345B;
  text-align: start;
  margin-top: 10px
`;

const Container = styled.div`
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 0.001em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 30px;
  margin: 10px;

  ${media}{
    font-size: 14px;
  }
`;