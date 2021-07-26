import React, { useState, useContext } from "react";
import { FirebaseContext } from '../../firebase';
import { motion } from 'framer-motion';
import { GradientBlob, FormContainer, Form, FormHeading, Input, Button } from './styles';

function ForgotPassword() {
  const { firebase } = useContext(FirebaseContext)
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [passwordResetError, setPasswordResetError] = useState(null);
  
  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPasswordEmail);
      setIsPasswordReset(true);
      setPasswordResetError(null);
    } catch (err) {
      console.error('Error sending email', err);
      setPasswordResetError(err.message);
      setIsPasswordReset(false);
    }
  }

  return(
    <GradientBlob>
      <motion.div
        className='gradient'
        initial={{ filter: 'blur(30px)'}}
        animate={{ filter: 'blur(35px)', rotate: 360, scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <FormContainer>
        <Form>
          <FormHeading>
            Reset Password
          </FormHeading>
          <Input 
            type='email' 
            className='input' 
            placeholder='Email' 
            onChange={event => setResetPasswordEmail(event.target.value)}  
          />
          <div>
            <Button 
              className='button'
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </div>
          {isPasswordReset && <p>Check email to reset password</p>}
          {passwordResetError && <p className='error-text'>{passwordResetError}</p>}
        </Form>
      </FormContainer>
    </GradientBlob>
  );
};

export default ForgotPassword;