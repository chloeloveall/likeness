import { useState, useEffect } from 'react';
import firebase from './firebase';

export default function useFirebaseStorage(file) {
  //upload progress
  const [progress, setProgress] = useState(0);
  // upload errors
  const [error, setError] = useState(null);
  //image url from firebase storage 
  const [url, setUrl] = useState(null);
  
  // useEffect will run each time there is a new file dependency 
  useEffect(() => {
    const storageRef = firebase.firebaseStorage.ref(file.name);
    const collectionRef = firebase.db.collection('images');

    storageRef.put(file).on('state_changed', (snapshot) => {
      const percentUploaded = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentUploaded);
    }, (err) => {
      setError(err)
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = Date.now();
      setUrl(url);
      // add photo url to a firestore collection
      collectionRef.add({
        url: url,
        createdAt: createdAt,
      });
    });
  }, [file]);

  return { progress, url, error };
};