import styled from 'styled-components';

// background styles 
export const GradientBlob = styled.div`
  z-index: 0;
  padding: 0px;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  margin-top: 0px !important;
  margin: auto;
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
    height: 90vh;
    width: 90vw;
    margin: auto;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    transform: skew(90deg);
  }
`;

// form styles 
export const FormContainer = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
  z-index: 10;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  margin-top: 55px;
`;

export const Form = styled.form`
  min-width: 260px;
  max-width: 500px;
	padding: 15px;
	background-color: transparent;
  margin-top: 65px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.01);
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
	border: .5px solid #4e4e4e;
  font-size: 1rem;
	background-color: transparent;
	padding: 15px;
  margin-top: 10px;
  &:focus {
    background-color: #F2F4F8;
  }
`;

export const FormHeading = styled.h1`
  text-align: center;
	font-size: 2.5rem;
	margin-top: 35px;
  color: #4e4e4e;
`;

export const BottomLinks = styled.div`
  font-size: 15px;
  font-family: 'Monda', sans-serif;
  font-weight: normal;
  letter-spacing: 1px;
  .links {
    color: #4e4e4e;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .rightFloat {
    float: right;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
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
  border-radius: 170px;
  display: block;
  width: 100%;
  border: .5px solid #4e4e4e;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const SecondaryButton = styled.button`
  border: none;
  background: transparent;
  font-size: 15px;
  letter-spacing: 1.5px;
  font-family: 'Monda', sans-serif;
`;