// REACT
import React from 'react';
// UTILS
import { cn, formatDate } from '@/utils/helpers';

type TimeInput = Date | string | null;

type FormatedTimeProps = {
  time: TimeInput;
  className?: string;
};

export const FormatedTime = ({ time, className }: FormatedTimeProps) => {

  return (
    <time className={cn("text-xs text-neutral", className)}>
      {formatDate(time as Date)}
    </time>
  );
};
