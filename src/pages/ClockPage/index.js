import React from 'react';
import styled from 'styled-components'

import Clock from './Clock';

export default function ClockPage() {
    return (
        <Container>
            <Gray>
                <img src='./assements/logo.jpg' />
                <h1>CAMPS</h1>
                <p>Ansioso pela Camps Party 2021?</p>
                <p>As pré-inscrições para o evento iniciam nesta sexta (11/12) às 18hrs.</p>
            </Gray>
            <Gradient>
                <h1>PARTY</h1>
                <Clock />
            </Gradient>
        </Container>
    );
}

const Container = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Gray = styled.div `
    width: 50%;
    height: 100%;
    background: rgb(100, 114, 143);
    padding: 10px;

    & > h1 {
        text-align: right;
    }
    & > p {
        margin-bottom: 10px;
    }
`;

const Gradient = styled.div `
    width: 50%;
    height: 100%;
    background-image: radial-gradient(circle,#0099FF 0%,#2C569D 60%);
    padding: 10px;
`;