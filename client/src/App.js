import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import JoinRoom from './components/JoinRoom/JoinRoom';
import Chat from './components/Chat/Chat';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={JoinRoom} />
        <Route exact path="/room/:room/:username" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
