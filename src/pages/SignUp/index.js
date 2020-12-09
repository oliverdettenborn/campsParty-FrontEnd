import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { LeftBox, RightBox, Title, Input, Error, Button } from '../../components/';
import axios from 'axios';

export default function SignIn() {
    const [ cpf, setCpf ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ error, setError ] = useState(null);
    const [ disabledButton , setDisabledButton ] = useState(false);
    const history = useHistory();

    function handleSignUp(e) {
        e.preventDefault();
        if (disabledButton) return;
        setDisabledButton(true);

        const data = {email, cpf, password, confirmPassword};
        const request = axios.post('http://localhost:3000/api/users/sign-up', data);
              
        request.then(response => {
            setDisabledButton(false);
            history.push('/sign-in');
        });

        request.catch(err => {
            console.log(err);
            setError(err);
            /*if (err.response.status === 422) { 
                setError('Preencha corretamente os campos');
            } else if (err.response.status === 409) {
                setError('Cpf ou email já cadastrado');
            } else {
                setError('Houve um erro ao cadastrar');
            }*/
            setDisabledButton(false);
        });
    }

    return (
        <Main>
            <LeftContainer>
                <LeftTitle> Faça agora a sua pré-inscrição para o evento </LeftTitle>
            </LeftContainer>

            <RightBox>
                <Title />
                <Form onSubmit={handleSignUp}>
                    <Input 
                        type='text'
                        placeholder='Cpf'
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
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
                    <Input 
                        type='password'
                        placeholder='Confirme a senha'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <Error>{error}</Error>}                    
                    <Button
                        width='80%'
                        height='50px'
                        type='submit'
                        disabledButton={disabledButton}
                    >
                        Quero Participar
                    </Button>
                    
                </Form>

                <SignInLink to= '/sign-in'> Gostaria de completar sua inscrição ? </SignInLink>
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
    margin: 30px 0px 20px 0px;

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
