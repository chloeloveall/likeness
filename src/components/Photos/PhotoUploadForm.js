import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function PhotoUploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const imageTypes = ['image/png', 'image/jpeg'];

  function handlePhotoUpload(event) {
    const selectedFile = event.target.files[0];
    
    if (selectedFile && imageTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid file type');
    }
  }

  return (
    <form>
      <label>
        <input type='file' onChange={handlePhotoUpload} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};