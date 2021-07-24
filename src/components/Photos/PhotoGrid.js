import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import { PhotoGridStyle, ImageWrap } from './styles';

export default function PhotoGrid({ setSelectedImage }) {
  const { docs } = useFirestore('images');

  return (
    <PhotoGridStyle>
      { docs && docs.map(doc => (
        <ImageWrap
          as={motion.div}
          layout
          whileHover={{ opacity: 1 }}
          className='tile' 
          key={doc.id}
          onClick={() => setSelectedImage(doc.url)}
        >
          <motion.img
            className='tile-img'
            src={doc.url} 
            alt='uploaded pic'
          />
        </ImageWrap>
      ))}
    </PhotoGridStyle>
  );
};