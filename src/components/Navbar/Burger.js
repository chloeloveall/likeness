import React, { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { StyledBurger } from './styles';
import RightNav from './RightNav';
import { motion } from 'framer-motion';

export default function Burger() {
  const [open, setOpen] = useState(false);
  
  open ? disableBodyScroll(document.body) : enableBodyScroll(document.body);

  return (
    <>
      {open && 
        <motion.div 
          className='backdrop' 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />}
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className='burgerSection' />
        <div className='burgerSection'/>
        <div className='burgerSection'/>
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen}/>
    </>
  );
};