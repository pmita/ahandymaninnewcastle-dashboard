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
  <div className="flex h-screen flex-col justify-between border-e bg-white">
    <div className="px-4 py-6">
      <Link 
        href="/" 
        className="text-md text-alternate font-poppins font-bold"
      >
        Dashboard
      </Link>

    <ul className="mt-6 space-y-1">
      {["Dashboard", "Progress", "Completed"].map((item, index) => (
        <li key={item}>
          <Link 
            href={`/${item.toLowerCase()}`}
            className={cn(
              "block rounded-lg px-4 py-2 text-sm font-medium text-gray-700",
              (pathname === `/${item.toLowerCase()}`) &&  'bg-gray-100',
            )}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-5 flex justify-center items-center">
    <Button 
      className={cn(
        buttonVariants({ variant: 'alternateOutlined', size: 'lg' }), 
        "item-stretch"
      )}
      onClick={signOut}
    >
      Sign Out
    </ Button>
  </div>
</div>

  );
}