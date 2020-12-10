import React, { useContext } from 'react';
import styled from 'styled-components'

import ClockContext from '../../context/ClockContext';

export default function Clock() {
    const { takes } = useContext(ClockContext);


    return (
        <Container>
            {
                takes.map((take) => {
                    return (
                        <Time key={take.id}>
                            { take.name === 'S' ?  ` ${take.time}${take.name}` : ` ${take.time}${take.name} :`}
                        </Time>
                    );
                })
            }
        </Container>
    );
}

const Container = styled.article `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    top: 45%;
    font-family: 'Saira Stencil One', cursive;
    font-size: 90px;
    color: #D1345B;

    @media (max-width: 600px) {
        font-size: 28px;
        position: absolute;
        top: 40%;
      }
`; 

const Time = styled.div `
    margin: 10px;
    height: 50px;
`;