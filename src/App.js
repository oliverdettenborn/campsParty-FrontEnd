import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { FormProvider } from './context/FormContext';
import ClockContext from './context/ClockContext';
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
  const {finish} = useContext(ClockContext);

  return (
      <UserProvider>
        <FormProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Switch>
            {
              !finish 
                ? (
                    <>
                    <Route path='/' exact component={ClockPage} />
                    <Route path='/pre-inscricao' component={SignUp} />
                    <Route path='/login' component={SignIn} />
                    <Route path='/participante' exact component={ParticipantPage} />
                    <Route path='/participante/dados' exact component={FormUser} />
                    <Route path='/participante/hospedagem' exact component={AccomodationChoosing} />
                    <Route path='/participante/atividades' exact component={ActivitiesChoosing} />
                    <Route path='/participante/visualizar-inscricao' exact component={ViewSubscription} />
                  </>
                )
                :  <Route path='/' exact component={ClockPage} />
            }
            </Switch>
          </BrowserRouter>
        </FormProvider>
      </UserProvider>
  );
}

export default App;
