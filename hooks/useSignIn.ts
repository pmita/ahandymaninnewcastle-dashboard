// REACT
import { useState, useEffect } from 'react';
// HOOKS
import { useAuth } from './useAuth';
// FIREBASE
import { auth } from '@/firebase/client/config';

export const useSignIn = () => {
  // STATE && VARIABLES
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const { setAuthedUser } = useAuth();

  const signin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
   
    try {
      const authResponse = await auth.signInWithEmailAndPassword(email, password)
    
      if (!authResponse.user) {
        throw new Error('User not found');
      }

      setAuthedUser(authResponse.user);

      if (isCancelled) {
        setError(null);
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