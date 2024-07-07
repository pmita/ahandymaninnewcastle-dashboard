"use client"

// NEXT
import { useRouter } from 'next/navigation';
// REACT
import { useCallback, useEffect } from 'react';
// COMPONETNS
import { InputField } from "@/components/input-field";
import { signInInputs } from "@/config/forms";
import { Button, buttonVariants } from "@/components/ui/button";
// HOOKS
import { useSignIn } from "@/hooks/useSignIn";
import { useAuth } from "@/hooks/useAuth";
// PACKAGES
import { useForm } from "react-hook-form";
// UTILS
import { cn } from "@/utils/helpers";
import { auth } from '@/firebase/client-config';

// TYPES
interface SignInFormProps {
  email: string;
  password: string;
}

interface SignInFormErrors {
  email: string;
  password: string;

}

export const SignInForm = () => {
  // STATE && VARIABLES
  const router = useRouter();
  const { authedUser } = useAuth();
  const { signin, error ,isLoading } = useSignIn();
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormProps>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    }
  });

  // FUNCTIONS
  const signInServerSide = async (email:string, password: string) => {
    const credential = await auth.signInWithEmailAndPassword(email, password);

    if (!credential.user) {
      throw new Error('User not found');
    }

    const idToken = await credential.user.getIdToken();

    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken })
    });

    console.log(response);
  }

  // EVENTS
  const onSubmit = useCallback(async ({email, password }: SignInFormProps) => {
    await signInServerSide(email, password);

    // if (!error && !isLoading) {
    //   router.push('/dashboard');
    // }
  }, []);

  // USE EFFECTS
  useEffect(() => {
    if (authedUser) {
      router.push('/dashboard');
    }
  }, [authedUser, router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[300px] flex flex-col justify-center items-center gap-5">
      {signInInputs && signInInputs.map((input) => (
        <InputField
          key={input.id}
          name={input.name}
          type={input.type}
          register={register}
          validationSchema={input.validationSchema}
          placeholder={input.placeholder}
          error={errors[input.name as keyof SignInFormErrors]?.message}
        />
      ))}

      <Button 
        className={cn(buttonVariants({ variant: "primary", size: "lg" }))} 
        type="submit" 
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Sign In'}
      </Button>
    </form> 
  );
}