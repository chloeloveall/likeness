import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Home from '../Home/Home';
// import LoginForm from '../Auth/LoginForm';
import Navbar from '../Navbar/Navbar';
import { Container } from './styles';
// import About from '../About/About';
// import Contact from '../Contact/Contact';

export default function Routes() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' &&
        <Navbar />}
      <Route exact path='/' component={Landing} />
      <Container>
        {/* <Route path='/login' component={LoginForm} /> */}
        <Route path='/home' component={Home} />
        {/* <Route path='/about' component={About} /> */}
        {/* <Route path='/contact' component={Contact} /> */}
      </Container>
    </>
  );
};