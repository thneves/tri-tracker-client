import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Menu from '../components/Menu';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/menu" component={Menu} />
    </Switch>
  </Router>
);

export default Routes;
