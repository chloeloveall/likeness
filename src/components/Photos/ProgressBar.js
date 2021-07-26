import React, { useEffect } from 'react';
import useFirebaseStorage from '../../firebase/useFirebaseStorage';
import { motion } from 'framer-motion';
import { StyledProgressBar } from './styles';

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useFirebaseStorage(file);
  
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <StyledProgressBar
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    />
  );
};