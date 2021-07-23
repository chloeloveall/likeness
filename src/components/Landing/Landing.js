import React from 'react';
import { GlobalStyle, Container, Button, TextContentContainer, Heading1, Heading2, Likeness, Blob } from './styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <GlobalStyle />
      <Blob 
          as={motion.div}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ yoyo: Infinity, duration: 10}}
        />
      <Container>
        <TextContentContainer>
          <Heading1 as={motion.h1} initial={{  opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>Experience <Likeness as={motion.span} whileHover={{ backgroundImage: 'linear-gradient(to right, #D6A4A4 0%, #DAE2F8  51%, #D6A4A4  100%)' }}>likeness</Likeness>
          </Heading1>
          <Heading2>
            <motion.span initial={{  opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 5 }}>Dreamy aesthetics. </motion.span> <motion.span initial={{  opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6, duration: 5 }}>Curated content.</motion.span>
          </Heading2>
          <motion.div initial={{  opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 9, duration: 5 }}>
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