import React, {Fragment} from 'react'
import {Switch, Route } from 'react-router-dom';
import Panel from './Panel';

const Routes = () => {
  return(
    <Fragment>
      <Switch>
        <Route exact path='/' component={Panel} />
      </Switch>
    </Fragment>
  )
}

export default Routes
