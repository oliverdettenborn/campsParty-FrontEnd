import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Button } from '../../components';

import ClockContext from '../../context/ClockContext';
import Clock from './Clock';

export default function ClockPage() {
    const { finish } = useContext(ClockContext);

    return (
        <Container>
            <Title>Camps Party</Title>
            <Clock />
            <Gray>
                <img src='/favicon.ico' alt='Camps Party' />
                <BottomBox>
                    { finish 
                        ? <Link to='/pre-inscricao' ><Button>QUERO PARTICIPAR</Button></Link>
                        : <p>Ansioso pela Camps Party 2021? <br/><br/> As pré-inscrições para o evento iniciam nesta sexta (11/12) às 18hrs.</p>
                    }
                </BottomBox>
            </Gray>
            <Gradient />
        </Container>
    );
}

const Container = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    color: #fff;
`;

const Gray = styled.div `
    width: 50%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > img {
        width: 50px;
        margin: 15px;
    }
    @media (max-width: 600px) {
        background: linear-gradient(149.71deg, #3454D1 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(329.71deg, #34D1BF 0%, rgba(52, 209, 191, 0) 100%);
        width: 100%;
        align-items: center;
    }
`;

const BottomBox = styled.div `
    margin: 20px;
    weight: 400;
    line-height: 26px;
    & > button {
        font-size: 24px;
        padding: 10px;
    }
`;

const Gradient = styled.div `
    width: 50%;
    height: 100%;
    background: linear-gradient(149.71deg, #3454D1 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(329.71deg, #34D1BF 0%, rgba(52, 209, 191, 0) 100%);
    @media (max-width: 600px) {
        display: none;
    }
`;

const Title = styled.h1 `
    font-family: 'Chelsea Market', cursive;
    font-size: 95px;
    text-align: center;
    margin: 15px;
    position: absolute;
    top: 15%;
    left: 10%;
    right: 15%;

  @media (max-width: 600px) {
    font-size: 38px;
    position: absolute;
    top: 15%;
    left: 5%;
    right: 5%;
  }
`;