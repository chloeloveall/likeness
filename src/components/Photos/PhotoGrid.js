import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from '../../firebase';
import { motion } from 'framer-motion';
import { PhotoGridStyle, ImageWrap } from './styles';

export default function PhotoGrid({ setSelectedImage }) {
  const { firebase } = useContext(FirebaseContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // onSnapshot returns active listener (get method returns promise and no active listener)
    getImages();
  }, []);

  function getImages() {
    firebase.db.collection('images').orderBy('createdAt', 'desc').onSnapshot(handleSnapshot);
  }

  function handleSnapshot(snapshot) {
    const images = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() }
    });
    setImages(images);
  }

  return (
    <PhotoGridStyle>
      { images.map(doc => (
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
}