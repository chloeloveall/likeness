import styled from 'styled-components';

// photo grid styles
export const PhotoGridStyle = styled.div`
  --auto-grid-min-size: 13rem;
  margin: 20px auto;
  display: grid;
  @media (min-width: 480px) {
    grid-template-columns: repeat(var(auto-fit), minmax(var(--auto-grid-min-size), 1fr));
  }
  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-gap: 40px;
`;

export const ImageWrap = styled.div`
  overflow: hidden;
  cursor: pointer;
  height: 0;
  ${'' /* padding to create square image regardless of width */}
  padding: 50% 0;
  position: relative;
  opacity: 0.8;
  border: solid 1px #b3aca7;
  img {
    ${'' /* min-width: 100%; */}
    min-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
		transition: transform 500ms ease;
		&:hover {
			transform: scale(1.15);
    }
  }
`;

// photo modal styles
export const StyledPhotoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 30;
  img {
    display: block;
    max-width: 80%;
    max-height: 80%;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    border: 1px solid white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StickyControls = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr 9.5vh;
  margin: auto;
  top: 0;
  position: fixed;
  cursor: pointer;
`;

export const Button = styled.button`
  display: block;
  background: #F2F4F8;
  border: none;
  margin: 5px;
`;

// photo upload form styles
export const UploadForm = styled.form`
  margin: 30px auto 10px;
  text-align: center;
  .output{
    height: 60px;
    font-size: 0.8rem;
  }
  .error{
    color: var(--error);
  }
`;

export const UploadButton = styled.span`
  box-sizing: border-box;
  background-image: linear-gradient(to right, #DAE2F8 0%, #D6A4A4  51%, #DAE2F8  100%);
  text-decoration: none;
  margin-left: 0;
  padding: 5px 10px;
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
  float: right;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

// upload progress bar styles 
export const StyledProgressBar = styled.div`
  height: 5px;
  background: #D6A4A4;
  margin-top: 20px;
`;