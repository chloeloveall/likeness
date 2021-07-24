import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalStyle, Heading1, Likeness, Container, Nav } from './styles';
import { motion } from 'framer-motion';
import Burger from './Burger';

export default function Navbar() {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <div className="logo">
          <Heading1 as={Link} to='/home'>
            <Likeness 
              as={motion.span} 
              whileHover={{ backgroundImage: 'linear-gradient(to right, #D6A4A4 0%, #DAE2F8  51%, #D6A4A4  100%)', backgroundPosition: 'right center' }}
            >
              likeness
            </Likeness>
          </Heading1>
        </div>
        <Burger />
      </Nav>
    </>
  );
};

