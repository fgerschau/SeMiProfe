import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Search } from 'screens';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  </div>
);

export default Routes;
