import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { Title  } from '../../components/';
import Aside from './Aside';
import Form from './Form';
import { media } from '../../assets/query';

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
            <Aside />
            <Container>
                <Title />
                <Form 
                    handleSignUp={handleSignUp}
                    cpf={cpf}
                    setCpf={setCpf}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
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
    margin-top: 2%;

    ${media}{
        width: 95%;
        margin: 0 auto;
        margin-top: 15%;
    }
`;
