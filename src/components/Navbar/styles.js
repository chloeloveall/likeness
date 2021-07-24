import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// global styles
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

// main nav bar styles
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
    ${'' /* z-index: 30; */}
  }
`;

// burger styles 
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 25px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  .burgerSection {
    width: 2rem;
    height: 0.25rem;
    background-color: #D6A4A4;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

// sidebar nav styles 
export const Ul = styled.ul`
  z-index: 2;
  padding: 0px;
  list-style: none;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    margin-top: 50px;
    padding-left: 10vw;
  }
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-flow: column nowrap;
  background-color: #F2F4F8;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  margin-top: 0px !important;
  ${'' /* li {
    &:hover{
      background-image: linear-gradient(to left, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  } */}
  .gradient {
    background-image:#DAE2f8;background-image:  
    radial-gradient(at 24% 25%, hsla(224,68%,89%,1) 0, transparent 51%),  
    radial-gradient(at 44% 35%, hsla(0,38%,68%,1) 0, transparent 46%),  
    radial-gradient(at 66% 70%, hsla(224,69%,92%,1) 0, transparent 45%),  
    radial-gradient(at 91% 70%, hsla(0,38%,75%,1) 0, transparent 45%),  
    radial-gradient(at 93% 10%, hsla(217,100%,95%,1) 0, transparent 31%),  
    radial-gradient(at 44% 81%, hsla(355,85%,93%,1) 0, transparent 50%),  
    radial-gradient(at 80% 100%, hsla(224,69%,92%,1) 0, transparent 50%),  
    radial-gradient(at 0% 0%, hsla(351,34%,93%,1) 0, transparent 50%);
    height: 60vh;
    width: 60vh;
    margin: auto;
    border-radius: 50%;
    filter: blur(35px);
    position: absolute;
    z-index: -1;
    position: absolute;
    top: 20%;
    -ms-transform: translateY(-20%);
    transform: translateY(-20%);
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;

export const StyledIcon = styled.i`
  padding-right: 8px;
  vertical-align: middle;
`;