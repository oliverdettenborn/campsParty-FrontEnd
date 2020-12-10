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
  console.log(finish);

  return (
      <UserProvider>
        <FormProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Switch>
            {
              finish 
                ? (
                    <>
                    <Route path='/' exact component={ClockPage} />
                    <Route path='/pre-inscricao' component={SignUp} />
                    <Route path='/login' component={SignIn} />
                    <Route path='/participante' component={ParticipantPage} />
                    <Route path='/participante/dados' component={FormUser} />
                    <Route path='/participante/hospedagem' component={AccomodationChoosing} />
                    <Route path='/participante/atividades' component={ActivitiesChoosing} />
                    <Route path='/participante/visualizar-inscricao' component={ViewSubscription} />
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
