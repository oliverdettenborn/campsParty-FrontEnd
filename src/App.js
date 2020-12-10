import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { FormProvider } from './context/FormContext';
import GlobalStyle from './assets/GlobalStyle';

import {
  AccomodationChoosing,
  ActivitiesChoosing,
  ClockPage,
  FormUser,
  ParticipantPage,
  SignIn,
  SignUp,
  ViewSubscription
} from './pages';

function App() {
  return (
    <UserProvider>
      <FormProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Switch>
            <Route path='/' exact component={ClockPage} />
            <Route path='/pre-inscricao' component={SignUp} />
            <Route path='/login' component={SignIn} />
            <Route path='/participante' component={ParticipantPage} />
            <Route path='/participante/dados' component={FormUser} />
            <Route path='/participante/hospedagem' component={AccomodationChoosing} />
            <Route path='/participante/atividades' component={ActivitiesChoosing} />
            <Route path='/participante/visualizar-inscricao' component={ViewSubscription} />
          </Switch>
        </BrowserRouter>
      </FormProvider>
    </UserProvider>
  );
}

export default App;
