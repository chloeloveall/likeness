import React from "react";
import { BlobBox } from './styles';
import { motion } from "framer-motion";

const Blob = () => {
  return (
    <BlobBox>
      <motion.div
        className="blob1"
        animate={{ rotate: 360, scale: [1, 1.1, 1.2, 1.3, 1.4, 1.3, 1.2, 1.1, 1] }}
        transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
      />
    </BlobBox>
  );
};

export default Blob;