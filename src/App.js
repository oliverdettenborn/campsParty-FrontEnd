import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import { UserProvider } from './context/UserContext';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GlobalStyle from './assets/GlobalStyle';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;