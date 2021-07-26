import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Landing from '../Landing/Landing.js';
import Home from '../Home/Home';
import Navbar from '../NavBar/Navbar';
import { Container } from './styles';
import Login from '../Auth/Login';
import ForgotPassword from '../Auth/ForgotPassword';

export default function Routes() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' &&
        <Navbar />}
          <Switch>
            <Route exact path='/' component={Landing} />
            <Container>
              <Route path='/home' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/forgot' component={ForgotPassword} />
            </Container>
          </Switch>
    </>
  );
};