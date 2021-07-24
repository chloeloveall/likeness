import React, { useState } from 'react';
import PhotoUploadForm from '../Photos/PhotoUploadForm';
import PhotoGrid from '../Photos/PhotoGrid';
import PhotoModal from '../Photos/PhotoModal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  selectedImage !== null ? disableBodyScroll(document.body) : enableBodyScroll(document.body);

  return (
    <>
      <PhotoUploadForm />
      <PhotoGrid setSelectedImage={setSelectedImage}  />
      {selectedImage &&
        <PhotoModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </>
  );
};