import React from 'react';
import styled from 'styled-components';

export default function BlueBox(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
};

const Container = styled.aside`
    height: 100%;
    width: 30%;
    background: rgba(52, 84, 209, 0.75);
    padding: 15px;

    @media (max-width: 600px) {
        display: none;
    }
`;