import React from 'react';
import { GlobalStyle, Container, Button, TextContentContainer, Heading1, Heading2, Likeness } from './styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Blob from '../Blob/Blob';

export default function Landing() {
  return (
    <>
      <Blob />
      <GlobalStyle />
      <Container>
        <TextContentContainer>
          <Heading1 
            as={motion.h1} 
            initial={{  opacity: 0 }} 
            animate={{ opacity: 1 }} t
            ransition={{ duration: 5 }}
          >
            Experience <Likeness as={motion.span} whileHover={{ backgroundImage: 'linear-gradient(to right, #D6A4A4 0%, #DAE2F8  51%, #D6A4A4  100%)', backgroundPosition: 'right center' }}>likeness</Likeness>
          </Heading1>
          <Heading2>
            <motion.span 
              initial={{  opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 3, duration: 5 }}
            >
              Dreamy aesthetics. </motion.span> <motion.span initial={{  opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6, duration: 5 }}>Curated content.</motion.span>
          </Heading2>
          <motion.div 
            initial={{  opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 8, duration: 5 }}
          >
            <Button 
              as={Link} 
              to='/login'
            >
              Learn More
            </Button>
          </motion.div>
        </TextContentContainer>
      </Container>
    </>
  );
};