// REACT
import { useState, useEffect, SetStateAction } from 'react';
// FIREBASE
import { firestore } from '@/firebase/client-config';
import { applyFirestoreFilters } from '@/utils/firestore';
import { IFirestoreFilters } from '@/types/firestore';

export const useCollectionSnapshot = (collectionRef: string, filters: IFirestoreFilters) => {
  //STATE
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const docsRef = firestore.collection(collectionRef);
    const docsWithFilters = applyFirestoreFilters(docsRef, filters);

    const unsubscribe = docsWithFilters
    .onSnapshot((snapshot: { empty: boolean; docs: FirebaseFirestore.DocumentData[]; }) => {
      if(!snapshot.empty) {
        const docs = snapshot.docs.map((doc: FirebaseFirestore.DocumentData) => ({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data().createdAt?.toMillis() ?? null,
          lastUpdated: doc.data().lastUpdated?.toMillis() ?? null,
        }));

        setData(docs);
        setIsLoading(false);
        setError(null);
      } else {
        setError('Collection is empty');
        setIsLoading(false);
      }
    }, (error: SetStateAction<string | Error | null>) => {
      setError(error);
      setIsLoading(false);
    })

    return () => unsubscribe();
  }, [collectionRef]);

  return { data, isLoading, error };
}