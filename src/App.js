import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  AccomodationForm,
  ActivitiesForm,
  ClockPage,
  FormUser,
  ParticipantPage,
  SignIn,
  SignUp,
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ClockPage} />
        <Route path='/pre-inscricao' component={SignUp} />
        <Route path='/login' component={SignIn} />
        <Route path='/participante' component={ParticipantPage} />
        <Route path='/participante/dados' component={FormUser} />
        <Route path='/participante/hospedagem' component={AccomodationForm} />
        <Route path='/participante/atividades' component={ActivitiesForm} />
      </Switch>
    </Router>
  );
}

export default App;
