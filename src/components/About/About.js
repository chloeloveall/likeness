import React from "react";
import { motion } from 'framer-motion';
import { GradientBlob, Container, Heading1 } from './styles';

export default function About() {
  return(
    <GradientBlob>
      <motion.div
        className='gradient'
        initial={{ filter: 'blur(30px)'}}
        animate={{ filter: 'blur(35px)', rotate: 360, scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <Container>
        <Heading1>Coming Soon!</Heading1>
      </Container>
    </GradientBlob>
  );
};