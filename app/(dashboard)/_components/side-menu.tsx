"use client"

// NEXT
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// COMPONENTS
import { Button, buttonVariants } from '@/components/ui/button';
// HOOKS
import { useSignOut } from '@/hooks/useSignOut';
// UTILS
import { cn } from '@/utils/helpers';

export const SideMenu = () => {
  // STATE && VARIABLES
  const pathname = usePathname();
  const { signOut } = useSignOut();


  return (
    <nav className="min-h-[10dvh] w-full flex flex-row justify-between items-center bg-secondary px-4 py-6">
      <Link 
        href="/" 
        className="text-md text-alternate font-poppins font-bold"
      >
        Dashboard
      </Link>

      <Button 
        className={cn(
          buttonVariants({ variant: 'primary', size: 'lg' }), 
          "item-stretch"
        )}
        onClick={signOut}
      >
        Sign Out
      </ Button>
    </nav>
  );
}