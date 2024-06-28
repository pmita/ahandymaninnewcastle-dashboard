// REACT
import { useState, useEffect } from 'react';
// FIREBASE
import { firestore } from '@/firebase/client-config';


export const useDocumentSnapshot = (collectionRef: string, docId: string) => {
  //STATE
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const unsubscribe = firestore.collection(collectionRef).doc(docId).onSnapshot((doc) => {
      if(doc.exists) {
        setData({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data()?.createdAt.toMillis() ?? null,
          lastUpdated: doc.data()?.lastUpdated.toMillis() ?? null,
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

  return { data, isLoading, error };
}

