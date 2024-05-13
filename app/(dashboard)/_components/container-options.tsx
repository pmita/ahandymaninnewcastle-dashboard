"use client"

// NEXT
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// REACT
import { useCallback, useState } from "react";
// COMPONENTS
import { Button, buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";

export type ContainerOptionsProps = {
  displayType: string;
}

const updateButtonVariant = (shouldShowPrimary: boolean) => {
  switch(shouldShowPrimary) {
    case true:
      return 'primary';
    case false:
      return 'primaryOutlined';
  }
}

export const ContainerOptions = ({
  displayType,
}: ContainerOptionsProps) => {
  // STATE && VARIABLES
  const [display, setDisplay] = useState(displayType || 'grid');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // EVENTS
  const updateDisplayType = useCallback((type: string) => {
    const params = new URLSearchParams(searchParams);

    switch(type) {
      case 'list':
        params.set('display', 'list');
        break
      case 'grid':
      default:
        params.set('display', 'grid');
        break;
    }

    setDisplay(type);
    replace(`${pathname}?${params.toString()}`);
  }, [replace, searchParams, pathname]);

  return (
    <div className="">
      <Button
        className={cn(buttonVariants({ 
          variant: updateButtonVariant(display === 'grid') 
        }), 'rounded-none')}
        onClick={() => updateDisplayType('grid')}
      >
        Grid
      </Button>
      <Button
        className={cn(buttonVariants({ 
          variant: updateButtonVariant(display === 'list') 
        }), 'rounded-none')}
        onClick={() => updateDisplayType('list')}
      >
        List
      </Button>
    </div>
  )
}