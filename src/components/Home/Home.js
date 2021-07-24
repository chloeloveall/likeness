import React, { useState } from 'react';
import PhotoUploadForm from '../Photos/PhotoUploadForm';
import PhotoGrid from '../Photos/PhotoGrid';
import PhotoModal from '../Photos/PhotoModal';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <PhotoUploadForm />
      <PhotoGrid setSelectedImage={setSelectedImage} />
      {selectedImage &&
        <PhotoModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </>
  );
};