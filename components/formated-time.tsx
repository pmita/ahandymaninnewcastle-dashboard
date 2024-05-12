// UTILS
import { cn } from '@/utils/helpers';

export const FormatedTime = ({ time, className }: { time: number | Date | undefined, className?: string }) => {
  return (
    <time className={cn("text-xs text-neutral", className)}>
      {new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'medium',
      }).format(time)}
    </time>
  )
}