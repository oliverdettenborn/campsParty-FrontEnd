import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { media } from '../assets/query';

export default function OptionsActivities({list}) {
  return (
    <Container>
      {
        list.map((item,i) => {
          return (
            <Card
              width='120px'
              height='120px'
              background='rgba(52, 209, 191, 0.9);'
              color='#EFEFEF'
              key={i}
            >
              <HiOutlineLightBulb />
              {item}
            </Card>
          )
        })
      }
    </Container>
  )
};

const Container = styled.span`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: 30px 0px 50px 0px;

  ${media}{
    width: 90%;
    div{
      width: 70px;
      height: 70px;
      font-size: 16px;
      margin-top: 15px;
      font-size: 14px;
      line-height: 18px;

      svg{
        font-size: 20px;
      }
    }
  }
`;