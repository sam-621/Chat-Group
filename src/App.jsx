import React from 'react';
import './styles/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Chat, Home } from './components/pages/';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
};
