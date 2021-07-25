import { useState, useEffect } from 'react';
import { firestoreDb, firebaseStorage, timestamp } from '../firebase/firebaseConfig';

export default function useFirebaseStorage(file) {
  //upload progress
  const [progress, setProgress] = useState(0);
  // upload errors
  const [error, setError] = useState(null);
  //image url from firebase storage 
  const [url, setUrl] = useState(null);
  
  // useEffect will run each time there is a new file dependency 
  useEffect(() => {
    // references
    const storageRef = firebaseStorage.ref(file.name);
    const collectionRef = firestoreDb.collection('images');

    storageRef.put(file).on('state_changed', (snapshot) => {
      const percentUploaded = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentUploaded);
    }, (err) => {
      setError(err)
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      setUrl(url);
      // add photo url to database
      collectionRef.add({
        url: url,
        createdAt: createdAt,
        caption: 'test'
      });
    });
  }, [file]);

  return { progress, url, error };
};