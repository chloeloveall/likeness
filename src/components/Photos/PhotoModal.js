import React from 'react';
import { motion } from 'framer-motion';
import { StyledPhotoModal } from './styles';
// import { XCircle } from "phosphor-react";

export default function Modal({ selectedImage, setSelectedImage }) {
  function handleClose(event) {
    if (event.target.classList.contains('backdrop')) {
      setSelectedImage(null);
    };
  };

  return (
    <StyledPhotoModal
      as={motion.div}
      className='backdrop' 
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* <motion.img 
        src={selectedImage} 
        alt='Uncropped image' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      /> */}

      <motion.img 
        src={selectedImage} 
        alt='Uncropped image' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      
      {/* <Button className='closeButton'>
        <XCircle size={48} className='closeButton'/>
      </Button> */}
      {/* <Button className='deleteButton'>
        <XCircle size={48} className='deleteButton'/>
      </Button> */}
    </StyledPhotoModal>
  );
};