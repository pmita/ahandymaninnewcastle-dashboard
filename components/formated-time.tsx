// REACT
import React from 'react';
// UTILS
import { cn, formatDate, formatDateFromMillis } from '@/utils/helpers';


type TimeInput = number | string;

type FormatedTimeProps = {
  time: TimeInput;
  className?: string;
};

export const FormatedTime = ({ time, className }: FormatedTimeProps) => {

  if (!time) return null;

  return (
    <time className={cn("text-xs text-neutral", className)}>
      {typeof time === 'number' ? formatDateFromMillis(time) : formatDate(time as unknown as Date)}
    </time>
  )
};
