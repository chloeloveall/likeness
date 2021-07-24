import React from 'react';
import { StyledIcon, Ul } from './styles';
import { SignOut, User, House, PaperPlaneTilt } from "phosphor-react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RightNav({ open, setOpen }) {
  return (
    <Ul open={open}>
      <motion.div 
        className='gradient'
        animate={{ rotate: 360, scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <li>
        <Link to='/home' open={open} onClick={() => setOpen(!open)}>
          <StyledIcon>
            <House />
          </StyledIcon>
          Home
        </Link>
      </li>
      <li>
        <Link to='/contact' open={open} onClick={() => setOpen(!open)}>
          <StyledIcon>
            <PaperPlaneTilt />
          </StyledIcon>
          Contact Us
        </Link>
      </li>
      <li>
        <Link to='/account' open={open} onClick={() => setOpen(!open)}>
          <StyledIcon>
            <User />
          </StyledIcon>
          Account
        </Link>
      </li>
      <li>
        <Link to='/' open={open} onClick={() => setOpen(!open)}>
          <StyledIcon>
            <SignOut />
          </StyledIcon>
          Sign Out
        </Link>
      </li>
    </Ul>
  );
};