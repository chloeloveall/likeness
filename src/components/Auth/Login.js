import React, { useState } from "react";
import useFormValidation from './useFormValidation';
import validateLogin from './validateLogin';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GradientBlob, FormContainer, Form, FormHeading, Input, BottomLinks, Button, SecondaryButton } from './styles';

const INITIAL_STATE ={
  name: '',
  email: '',
  password: ''
}

function Login(props) {
  const { handleBlur, handleChange, handleSubmit, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [login, setLogin] = useState(true);
  const [firebaseError, setFirebaseError] = useState(null);

  async function authenticateUser() {
    const { name, email, password } = values;

    try {
      login 
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password)
      props.history.push('/home');
    } catch (err) {
      console.error('Authentication error', err)
      setFirebaseError(err.message)
    }
  }

  return (
    <GradientBlob>
      <motion.div
        className='gradient'
        initial={{ filter: 'blur(30px)'}}
        animate={{ filter: 'blur(35px)', rotate: 360, scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormHeading>
            {login ? 'Login' : 'Create Account'}
          </FormHeading>
          {!login && 
            <Input 
              type='text' 
              name='name'
              value={values.name}
              placeholder='Name' 
              autoComplete='off'
              onChange={handleChange}
            />
          }
          <Input 
            type='email'
            name='email'
            value={values.email}
            placeholder='Email' 
            autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && 'error-input'}
          />
          {errors.email && <p className='error-text'>{ errors.email} </p>}
          <Input 
            type='password'
            value={values.password}
            name='password'
            placeholder='Password'
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && 'error-input'}
          />
          {errors.password && <p className='error-text'>{ errors.password} </p>}

          {firebaseError && <p className='error-text'>{firebaseError} </p>}

          <Button 
            type='submit' 
            disabled={isSubmitting}
          >
            Submit
          </Button>
          <BottomLinks>
            <SecondaryButton
              type='button' 
              className='links'
              onClick={() => setLogin(previousLogin => !previousLogin)}
            >
              {login ? 'Register?' : 'Login?'}
            </SecondaryButton>
            <Link to='/forgot' className='links rightFloat'>Forgot password?</Link>
          </BottomLinks>
        </Form>
      </FormContainer>
    </GradientBlob>
  );
};

export default Login;
