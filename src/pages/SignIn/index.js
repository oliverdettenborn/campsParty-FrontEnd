import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../../context/UserContext';
import { Title, Input, Error, Button } from '../../components/';
import Aside from './Aside';
import Form from './Form';
import { media } from '../../assets/query';

export default function SignIn() {
    const { user, setUser } = useContext(UserContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null);
    const [ disabledButton , setDisabledButton ] = useState(false);

    function handleSignIn(e) {
        e.preventDefault();

        if (disabledButton) return;
        setDisabledButton(true);

        const data = { email, password };
        const request = axios.post('http://localhost:3000/api/users/sign-in', data);
        
        request.then(response => {
            setUser(response.data);
            setDisabledButton(false);
            //history.push('/');
        });

        request.catch(err => {
            setError(err.message);
            setDisabledButton(false);
        });
    }

    return (
        <Main>
            <Aside />
            <Container>
                <Title />
                <Form
                    handleSignIn={handleSignIn}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    error={error}
                    disabledButton={disabledButton}
                /> 
            </Container>
        </Main>
    );
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    ${media}{
        flex-direction: column-reverse;
    }
`;
const Container = styled.section`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;

    ${media}{
        width: 95%;
        margin: 0 auto;
        margin-top: 15%;
    }
`;