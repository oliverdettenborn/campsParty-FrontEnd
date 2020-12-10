import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ClockPage from './pages/ClockPage';
import { ClockProvider } from './contexts/ClockContext';
import GlobalStyle from './assets/GlobalStyle';

export default function App() {
  return (
    <ClockProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/">
              <ClockPage />
            </Route>
        </Switch>
      </Router>
    </ClockProvider>
  );
}