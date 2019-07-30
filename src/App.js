import React from 'react';
import {Router, Switch, Route } from 'react-router-dom';
import history from './util/history'
import Panel from './components/Panel'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'  component={Panel}/>
      </Switch>
    </Router>
  );
}

export default App;
