"use client"

// NEXT
import { useRouter } from 'next/navigation';
import { InputField } from "@/components/input-field";
import { signInInputs } from "@/config/forms";
import { Button, buttonVariants } from "@/components/ui/button";
// HOOKS
import { useSignIn } from "@/hooks/useSignIn";
// PACKAGES
import { useForm } from "react-hook-form";
// UTILS
import { cn } from "@/utils/helpers";

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
  const { signin, error ,isLoading } = useSignIn();
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormProps>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    }
  });

  // EVENTS
  const onSubmit = async ({email, password }: SignInFormProps) => {
    console.log(email, password);
    await signin(email, password);

    router.push('/dashboard');
  }

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

      <Button className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
        Sign In
      </Button>
    </form> 
  );
}