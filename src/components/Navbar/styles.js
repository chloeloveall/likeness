import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    height: 100vh;
    width: 80vw;
    font-family: 'Monda', sans-serif;
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
    background-attachment: fixed;
    bottom: 0;
    margin: 0 auto;
  }
`;

export const Heading1 = styled.h1`
  font-size: 40px;
  font-family: 'Julius Sans One', sans-serif;
  text-decoration: none;
  font-weight: bold;
`;

export const Likeness = styled.span`
  background-image: linear-gradient(to right, #D6A4A4 0%, #D6A4A4  51%, #D6A4A4  100%);
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  transition: 0.5s;
  background-size: 200% auto;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding-top: 20px;
  }
`;