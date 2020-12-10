import React from 'react';
import styled from 'styled-components';

export default function BlueBox(props) {
    return (
        <Container displayMedia={props.togleMenu}>
            {props.children}
        </Container>
    )
};

const Container = styled.aside`
    height: 100%;
    min-height: 100vh;
    width: 30%;
    background: rgba(52, 84, 209, 0.75);
    backdrop-filter: blur(4px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 15px;
    flex-grow: 1;
    position: fixed;
    top: 0;
    left: 0;

    @media (max-width: 600px) {
        display: ${props => props.displayMedia ? "block" : "none"};
        width: 50%;
    }
`;