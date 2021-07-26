import React, { useContext } from "react";
import { StyledIcon, Ul, StyledLink, StyledLink2 } from './styles';
import { SignOut, SignIn } from "phosphor-react";
import { motion } from 'framer-motion';
import { FirebaseContext } from '../../firebase';

export default function RightNav({ open, setOpen }) {
  const { user, firebase } = useContext(FirebaseContext); 

  return (
    <Ul open={open}>
      <motion.div 
        className='gradient'
        animate={{ rotate: 360, scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <li>
        <StyledLink to='/home' open={open} onClick={() => setOpen(!open)}>
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/about' open={open} onClick={() => setOpen(!open)}>
          About
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/contact' open={open} onClick={() => setOpen(!open)}>
          Contact
        </StyledLink>
      </li>
      <li>
        <StyledLink to='/account' open={open} onClick={() => setOpen(!open)}>
          Account
        </StyledLink>
      </li>
      <li>
        {user ? (
          <>
            <StyledLink2 to='/' open={open} onClick={() => {firebase.logout(); setOpen(!open)}}> Sign Out <StyledIcon><SignOut /></StyledIcon><br /> {user.displayName}</StyledLink2>
          </>
        ) : <StyledLink2 to='/login' open={open} onClick={() => setOpen(!open)}>
            Sign In 
            <StyledIcon>
              <SignIn />
            </StyledIcon>
          </StyledLink2>
        }
      </li>
    </Ul>
  );
};