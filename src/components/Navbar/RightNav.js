import React from 'react';
import { StyledIcon, Ul, StyledLink, StyledLink2 } from './styles';
import { SignOut } from "phosphor-react";
// import { Link } from 'react-router-dom';
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
        <StyledLink to='/home' open={open} onClick={() => setOpen(!open)}>
          {/* <StyledIcon>
            <House />
          </StyledIcon> */}
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/about' open={open} onClick={() => setOpen(!open)}>
          {/* <StyledIcon>
            <House />
          </StyledIcon> */}
          About
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/contact' open={open} onClick={() => setOpen(!open)}>
          {/* <StyledIcon>
            <PaperPlaneTilt />
          </StyledIcon> */}
          Contact
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/account' open={open} onClick={() => setOpen(!open)}>
          {/* <StyledIcon>
            <User />
          </StyledIcon> */}
          Account
        </StyledLink>
      </li>
      <li>
        <StyledLink2 to='/' open={open} onClick={() => setOpen(!open)}>
          Sign Out
          <StyledIcon>
            <SignOut />
          </StyledIcon>
        </StyledLink2>
      </li>
    </Ul>
  );
};