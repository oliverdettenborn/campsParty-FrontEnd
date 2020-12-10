import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { Title, RightBlackBox, PageTwoColumn } from '../../components/';
import Aside from './Aside';
import Form from './Form';

export default function SignIn() {
    const { setUser } = useContext(UserContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null);
    const [ disabledButton , setDisabledButton ] = useState(false);
    const history = useHistory();
    
    function handleSignIn(e) {
        e.preventDefault();

        if (disabledButton) return;
        setDisabledButton(true);

        const data = { email, password };
        const request = axios.post(`${process.env.REACT_APP_API_URL}/api/users/sign-in`, data);
        
        request.then(response => {
            setUser(response.data);
            setDisabledButton(false);
            history.push('/participante');
        });

        request.catch(err => {
            setError(err.message);
            setDisabledButton(false);
        });
    }

    return (
        <PageTwoColumn>
            <Aside />
            <RightBlackBox>
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
            </RightBlackBox>
        </PageTwoColumn>
    );
}