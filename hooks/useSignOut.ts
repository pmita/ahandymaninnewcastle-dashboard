// REACT
import { useState, useEffect } from 'react';
// HOOKS
import { useAuth } from './useAuth';
// FIREBASE
import { auth } from '@/firebase/client/config';


export const useSignOut = () => {
    // STATE
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null | string>(null);
    const [isCancelled, setIsCancelled] = useState(false);
    const { setAuthedUser } = useAuth();

    const signOut = async () => {
      setIsLoading(false);
      setError(null);

      try {
        await auth.signOut();

        setAuthedUser(null);

        if(!isCancelled) {
          setIsLoading(false);
          setError(null);
        }
      } catch(error) {
        if (!isCancelled) {
          setIsLoading(false);
          setError((error as Error).message);
        }
      }
    }

    useEffect(() => {
      return () => setIsCancelled(true);
    }, []);

    return { error, isLoading, signOut }
}
