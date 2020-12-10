import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Title, RightBlackBox, PageTwoColumn } from '../../components/';
import Aside from './Aside';
import Form from './Form';

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
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    error={error}
                    disabledButton={disabledButton}
                />
            </RightBlackBox>
        </PageTwoColumn>
    );
}