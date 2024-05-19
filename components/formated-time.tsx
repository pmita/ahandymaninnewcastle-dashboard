import React from 'react';
import { cn } from '@/utils/helpers';

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

type TimeInput = Date | string | FirestoreTimestamp | null;

export const FormatedTime = ({ time, className }: { time: TimeInput, className?: string }) => {
  // Function to format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'medium',
    }).format(date);
  };

  // Convert input to Date object if it's not already
  let date: Date | null = null;

  if (typeof time === 'string') {
    date = new Date(time);
  } else if (time instanceof Date) {
    date = time;
  } else if (time && typeof time === 'object' && 'seconds' in time && 'nanoseconds' in time) {
    date = new Date(time.seconds * 1000 + time.nanoseconds / 1000000);
  }

  // Check if the date is valid
  const isValidDate = date instanceof Date && !isNaN(date.getTime());

  // Render formatted date if valid, otherwise render error message
  return (
    <time className={cn("text-xs text-neutral", className)}>
      {isValidDate ? formatDate(date!) : 'Invalid date'}
    </time>
  );
};
