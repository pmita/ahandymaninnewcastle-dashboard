// REACT
import { useState } from 'react';
// FIREBASE
import { firestore, timestamp } from '@/firebase/client-config';

export const useFirestore = () => {
  // STATE & HOOKS
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasQueryBeenSent, setHasQueryBeenSent] = useState(false);

  // FUNCTIONS
  const addDocument = async (collection:string, data: object) => {
    setIsLoading(true);
    setHasQueryBeenSent(false);
    setError(null);

    const docRef = firestore.collection(collection);

    try {
      const response = await docRef.add({
        ...data,
        createdAt: timestamp(),
        lastUpdated: timestamp()
      });

      if(!response) {
        throw new Error('Could not add document');
      }

      setHasQueryBeenSent(true);
    }catch(err) {
      setError((err as Error).message);
      setHasQueryBeenSent(false);
    }finally {
      setIsLoading(false);
    }

  }

  const updateDocument = async (collection:string,documentId: string,  data: object) => {
    setIsLoading(true);
    setError(null);

    const docRef = firestore.collection(collection).doc(documentId);

    try {
      await docRef.update({
        ...data,
        lastUpdated: timestamp()
      });
    }catch(err) {
      setError((err as Error).message);
    }finally {
      setIsLoading(false);
    }
  }

  return { 
    isLoading, 
    hasQueryBeenSent, 
    error, 
    addDocument,
    updateDocument
  };
}