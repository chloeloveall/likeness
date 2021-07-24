import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import LoginForm from './components/Auth/LoginForm';
import Navbar from './components/Navbar/Navbar';

export default function Routes() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' &&
        <Navbar />}
      <Route exact path='/' component={Landing} />
      <Route path='/login' component={LoginForm} />
      <Route path='/home' component={Home} />
    </>
  );
};