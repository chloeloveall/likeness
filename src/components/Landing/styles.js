import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import BlobSvg from '../../assets/images/blob.svg';

export const GlobalStyle = createGlobalStyle`
  body{
    height: 100vh;
    font-family: 'Monda', sans-serif;
    color: var(--secondary);
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    background-attachment: fixed;
    bottom: 0;
    margin: 0;
  }
`;

export const Blob = styled.div`
  background-image: url(${BlobSvg});
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #DAE2F8 0%, #D6A4A4  51%, #DAE2F8  100%);
  text-decoration: none;
  margin: 10px;
  margin-left: 0;
  padding: 15px 25px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  max-width: 150px;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  margin: auto;
`;

export const Heading1 = styled.h1`
  font-size: 60px;
  font-family: 'Julius Sans One', sans-serif;
`;

export const Heading2 = styled.h2`
  font-size: 30px;
  padding-bottom: 20px;
`;

export const Likeness = styled.span`
  background-image: linear-gradient(to right, #D6A4A4 0%, #D6A4A4  51%, #D6A4A4  100%);
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
`;

export const TextContentContainer = styled.div`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;