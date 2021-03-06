import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import Home from '../components/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Tracks from '../containers/Tracks';
import Progress from '../containers/Progress';
import More from '../components/More';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/tracks" component={Tracks} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/progress" component={Progress} />
      <Route path="/more" component={More} />
    </Switch>
  </Router>
);

export default Routes;
