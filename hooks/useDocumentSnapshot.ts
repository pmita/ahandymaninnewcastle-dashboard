// REACT
import { useState, useEffect } from 'react';
// FIREBASE
import { firestore } from '@/firebase/client-config';


export const useDocumentSnapshot = (collectionRef: string, docId: string) => {
  //STATE
  const [document, setDocument] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const unsubscribe = firestore.collection(collectionRef).doc(docId).onSnapshot((doc) => {
      if(doc.exists) {
        setDocument({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data()?.createdAt.toDate(),
          lastUpdated: doc.data()?.createdAt.toDate()
        });

        setIsLoading(false);
        setError(null);
      } else {
        setError('Document does not exist');
        setIsLoading(false);
      }
    }, (error) => {
      setError(error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [collectionRef, docId]);

  return { document, isLoading, error };
}

