import { useState, useEffect } from 'react';
import { firestoreDb } from '../firebase/firebaseConfig';

export default function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = firestoreDb.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id })
        });
        setDocs(documents);
      });

    return () => unsubscribe();

  }, [collection]);

  return { docs };
};