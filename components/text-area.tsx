"use client"

import { IFormField } from '@/types';

export default function TextAreaField({
  name,
  label,
  register,
  validationSchema,
  placeholder,
  error,
  ...rest
}: IFormField) : JSX.Element {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-5">
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}

      <textarea
        className="w-full border-solid border-[0.3rem] border-primary p-4 rounded-[6px]"
        id={name}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        {...rest}
      />

      {error && (
        <span className="text-danger">{error}</span>
      )}
    </div>
  )
}