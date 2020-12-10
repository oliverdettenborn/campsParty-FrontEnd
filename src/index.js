import React from 'react';
import ReactDOM from 'react-dom';
import { ClockProvider } from './context/ClockContext';
import App from './App';

const root = document.getElementById('root');
ReactDOM.render(
    <ClockProvider>
        <App />
    </ClockProvider>
, root);
