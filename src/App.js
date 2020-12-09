import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { UserProvider } from './context/UserContext';
import {
  AccomodationForm,
  ActivitiesForm,
  ClockPage,
  FormUser,
  ParticipantPage,
  SignIn,
  SignUp,
} from './pages';
import GlobalStyle from './assets/GlobalStyle';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
        <Route path='/' component={ClockPage} />
        <Route path='/pre-inscricao' component={SignUp} />
        <Route path='/login' component={SignIn} />
        <Route path='/participante' component={ParticipantPage} />
        <Route path='/participante/dados' component={FormUser} />
        <Route path='/participante/hospedagem' component={AccomodationForm} />
        <Route path='/participante/atividades' component={ActivitiesForm} />
      </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;