"use client"

// UTILS
import { cn } from '@/utils/helpers';
// TYPES
import { IFormField } from '@/types';

export function InputField({
  name,
  label,
  register,
  validationSchema,
  type,
  placeholder,
  error,
  className,
  ...rest
}: IFormField) : JSX.Element {
  return (
    <div className={cn("w-full flex flex-col justify-center items-start gap-5", className)}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}

      <input
        className="w-full border-solid border-[0.3rem] border-primary p-4 rounded-[6px]"
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validationSchema)}
        {...rest}
      />

      {error && (
        <span className="text-danger">{error}</span>
      )}
    </div>
  )
}