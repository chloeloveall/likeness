import styled from 'styled-components';

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
	overflow: hidden;
  height: 0;
  /* padding to create square image regardless of width */
  padding: 50% 0;
  position: relative;
  opacity: 0.8;
  border: solid 1px #b3aca7;
  img {
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;
		transition: transform 500ms ease;
		&:hover {
			transform: scale(1.15);
    }
  }
`;