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
export const Container = styled.div`
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

export const Heading1 = styled.h1`
  font-size: 60px;
  font-family: 'Julius Sans One', sans-serif;
`;