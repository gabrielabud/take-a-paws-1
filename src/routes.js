import React from 'react';
import App from './components/App';
import DogProfile from './components/DogProfile';
import SignUpForm from './components/SignUpForm';
import DogForm from './components/DogForm';
import SignInForm from './components/SignInForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path="/dog/:dogId" component={DogProfile} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/dogform" component={DogForm} />
      <Route exact path="/signin" component={SignInForm} />
    </Switch>
  </Router>
);
export default Routes;
