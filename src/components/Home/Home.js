import React, { useState } from 'react';
import UploadForm from '../PhotoUploadForm';
import PhotoGrid from '../PhotoGrid';
import PhotoModal from '../PhotoModal';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <UploadForm />
      <PhotoGrid setSelectedImage={setSelectedImage} />
      {selectedImage &&
        <PhotoModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </>
  );
};