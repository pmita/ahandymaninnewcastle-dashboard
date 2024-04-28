// REACT
import { useState, useEffect } from 'react';
// FIREBASE
import { auth } from '@/firebase/client-config';

export const useSignIn = () => {
  // STATE && VARIABLES
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);

  const signin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
   
    try {
      const authResponse = await auth.signInWithEmailAndPassword(email, password)
    
      if (!authResponse.user) {
        throw new Error('User not found');
      }

      if (isCancelled) {
        setIsCancelled(false);
        setIsLoading(false);
      }


    }catch(error) {
      if (isCancelled) {
        setIsLoading(false);
        setError((error as Error).message);
      }
    }

  }
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { isLoading, error, signin };
}