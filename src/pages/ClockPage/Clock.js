import React, { useContext } from 'react';
import styled from 'styled-components'

import ClockContext from '../../contexts/ClockContext';

export default function Clock() {
    const { takes } = useContext(ClockContext)


    return (
        <Container>
            {
                takes.map((take) => {
                    return (
                        <Time key={take.id}>
                            {take.time} {take.name}
                        </Time>
                    );
                })
            }
        </Container>
    );
}

const Container = styled.article `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`; 

const Time = styled.div `
    margin: 10px;
`;