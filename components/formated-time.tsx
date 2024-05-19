// UTILS
import { cn } from '@/utils/helpers';

export const FormatedTime = ({ time, className }: { time: Date | string | null, className?: string }) => {
  // Function to format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'medium',
    }).format(date);
  };

  // Convert input to Date object if it's not already
  let date;
  if (typeof time === 'string') {
    date = new Date(time);
  } else {
    date = time as Date; // Type assertion to ensure 'date' is of type 'Date'
  }

  // Check if the date is valid
  const isValidDate = date !== null && !isNaN(date.getTime());

  // Render formatted date if valid, otherwise render error message
  return (
    <time className={cn("text-xs text-neutral", className)}>
      {isValidDate ? formatDate(date) : 'Invalid date'}
    </time>
  );
};