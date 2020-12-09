import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../../context/UserContext';
import { LeftBox, RightBox, Title, Input, Error, Button } from '../../components/';

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
            <LeftContainer>
                <LeftTitle> Acesse sua área do participante e complete sua inscrição </LeftTitle>
            </LeftContainer>

            <RightBox>
                <Title />
                <Form onSubmit={handleSignIn}>
                    <Input 
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    {error && <Error>{error}</Error>}

                    <Button
                        width='80%'
                        height='50px'
                        type='submit'
                        disabledButton={disabledButton}
                    >
                        Completar Inscrição
                    </Button>
                    
                </Form>

                <SignInLink to= '/sign-up'> Ainda não fez sua pré-inscrição ? </SignInLink>
            </RightBox>
        </Main>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    background: #34d1bf;
    border-radius: 15px;
    padding: 30px;
    align-self: center;
    margin: 50px 0px 20px 0px;

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 30px;
        padding: 15px;
        margin-top: 25px;
    }
`;

const LeftContainer = styled(LeftBox)`
    justify-content: center;
`;

const SignInLink = styled(Link)`
    font-size: 22px;
    text-align: center;
    color: #EFEFEF;
    margin-bottom: 10px;

    :hover {
        text-decoration: underline;
    }
`;

const LeftTitle = styled.h2`
    font-size: 32px;
    font-family: 'Chelsea Market', cursive;
    color: #EFEFEF;
    text-align: center;
`;

const Main = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
`;