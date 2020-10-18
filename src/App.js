import React from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';

import { FirstPerson, SecondPerson, PersonSwitcher } from './components';

import './App.css';


const  App  = () => (
  <BrowserRouter>
    <>
      <PersonSwitcher />
      <Switch>
        <Route path="/" component={FirstPerson} exact />
        <Route path="/first-person" component={FirstPerson} exact />
        <Route path="/second-person" component={SecondPerson} exact />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
