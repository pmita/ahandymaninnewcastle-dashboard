"use client"

// COMPONENTS
import { InputField } from "@/components/input-field";
import TextAreaField from "@/components/text-area";
import { Button, buttonVariants } from "@/components/ui/button";
// HOOKS
import { useFirestore } from "@/hooks/useFirestore";
// PACKAGES
import { type SubmitHandler, useForm } from "react-hook-form";
// CONFIG
import { contactForm, contactTextAreForm, honeyPotInput } from "@/config/forms";
// UTILS
import { cn } from "@/utils/helpers";
// TYPES
import { IContactForm, ContactFormErrors } from "@/types";


export const ContactForm = () => {
  // STATE & HOOKS
  const { addDocument, hasQueryBeenSent } = useFirestore();
  const { register, handleSubmit, formState: { errors }, reset} = useForm<IContactForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      location: '',
      additionalInfo: '',
      goodToKnow: ''
    }
  })

  // EVENTS
  const onSubmit: SubmitHandler<IContactForm> = async ({ fullName, email, mobile, location, additionalInfo, goodToKnow }: IContactForm) => {
    // Check if the honeypot input is filled before sbubmitting the form in the db
    if (!goodToKnow) {
      await addDocument(
        'queries', {
          fullName,
          email,
          mobile,
          location,
          additionalInfo
        }
      )
    }

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-lg text-alternate font-bold">Get in touch!</h1>
      {contactForm && contactForm.map((input) => (
        <InputField
          key={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          register={register}
          validationSchema={input.validationSchema}
          error={errors[input.name as keyof ContactFormErrors]?.message}
        />
      ))}

      <InputField
        className="hidden"
        name={honeyPotInput.name}
        type={honeyPotInput.type}
        placeholder={honeyPotInput.placeholder}
        register={register}
      />

      {contactTextAreForm && (
        <TextAreaField
          name={contactTextAreForm.name}
          placeholder={contactTextAreForm.placeholder}
          register={register}
          validationSchema={contactTextAreForm.validationSchema}
          error={errors[contactTextAreForm.name as keyof ContactFormErrors]?.message}
        />
      )}

      <Button type="submit" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
        Submit
      </Button>

      {hasQueryBeenSent && (
        <p className="text-lg text-poppins text-alternate text-center font-bold">Query has been sent!</p>
      )}
    </form>
  )
}