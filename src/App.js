import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { FormProvider } from './context/FormContext';
import GlobalStyle from './assets/GlobalStyle';

import {
  AccomodationChoosing,
  ActivitiesChoosing,
  FormUser,
  ParticipantPage,
  SignIn,
  SignUp,
  ViewSubscription,
  AccomodationEdit
} from './pages';

function App() {

  return (
      <UserProvider>
        <FormProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Switch>
                    <Route path='/' component={SignUp} />
                    <Route path='/login' component={SignIn} />
                    <Route path='/participante' exact component={ParticipantPage} />
                    <Route path='/participante/dados' exact component={FormUser} />
                    <Route path='/participante/hospedagem' exact component={AccomodationChoosing} />
                    <Route path='/participante/hospedagem/editar' exact component={AccomodationEdit} />
                    <Route path='/participante/atividades' exact component={ActivitiesChoosing} />
                    <Route path='/participante/visualizar-inscricao' exact component={ViewSubscription} />
            </Switch>
          </BrowserRouter>
        </FormProvider>
      </UserProvider>
  );
}

export default App;
