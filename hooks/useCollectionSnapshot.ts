// REACT
import { useState, useEffect } from 'react';
// FIREBASE
import { firestore } from '@/firebase/client-config';

export const useCollectionSnapshot = (collectionRef: string) => {
  //STATE
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const unsubscribe = firestore.collection(collectionRef)
    .orderBy('createdAt', 'asc')
    .onSnapshot((snapshot) => {
      if(!snapshot.empty) {
        const docs = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data()?.createdAt ?? null,
          lastUpdated: doc.data()?.lastUpdated ?? null,
        }));

        setData(docs);
        setIsLoading(false);
        setError(null);
      } else {
        setError('Collection is empty');
        setIsLoading(false);
      }
    }, (error) => {
      setError(error);
      setIsLoading(false);
    })

    return () => unsubscribe();
  }, [collectionRef]);

  return { data, isLoading, error };
}