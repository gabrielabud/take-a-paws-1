import React from 'react';
import App from './components/App';
import DogProfile from './components/DogProfile';
import SignUpForm from './components/SignUpForm';
import DogForm from './components/DogForm';
import SignInForm from './components/SignInForm';
import UserAccount from './components/UserAccount';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/home' component={Home} />
      <Route exact path="/dog/:dogId" component={DogProfile} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/dogform" component={DogForm} />
      <Route exact path="/signin" component={SignInForm} />
      <Route exact path="/useraccount" component={UserAccount} />
      <Route exact path="/chat" component={Chat} />
    </Switch>
  </Router>
);
export default Routes;
