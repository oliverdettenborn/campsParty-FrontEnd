import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Title, RightBlackBox, PageTwoColumn } from '../../components/';
import Aside from './Aside';
import Form from './Form';
import UserContext from '../../context/UserContext';

export default function SignIn() {
    const { user } = useContext(UserContext);
    const [ cpf, setCpf ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirmation, setPasswordConfirmation ] = useState("");
    const [ error, setError ] = useState(null);
    const [ disabledButton , setDisabledButton ] = useState(false);
    const history = useHistory();

    if(user && user.token){
        history.push('/participante')
    }

    function handleSignUp(e) {
        e.preventDefault();
        if (disabledButton) return;
        setDisabledButton(true);

        const data = {email, cpf, password, passwordConfirmation};
        const request = axios.post(`${process.env.REACT_APP_API_URL}/api/users/sign-up`, data);

        request.then(response => {
            setDisabledButton(false);
            history.push('/login');
        });

        request.catch(err => {
            console.log(err);
            setError(err);
            if (err.response.status === 422) { 
                setError('Preencha corretamente os campos');
            } else if (err.response.status === 409) {
                setError('Cpf ou email já cadastrado');
            } else {
                setError('Houve um erro ao cadastrar');
            }
            setDisabledButton(false);
        });
    }

    return (
        <PageTwoColumn>
            <Aside />
            <RightBlackBox>
                <Title />
                <Form 
                    handleSignUp={handleSignUp}
                    cpf={cpf}
                    setCpf={setCpf}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    passwordConfirmation={passwordConfirmation}
                    setPasswordConfirmation={setPasswordConfirmation}
                    error={error}
                    disabledButton={disabledButton}
                />
            </RightBlackBox>
        </PageTwoColumn>
    );
}