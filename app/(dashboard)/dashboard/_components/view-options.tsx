"use client"

// NEXT
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// REACT
import { useCallback, useState } from "react";
// COMPONENTS
import { OptionTab } from "./option-tab";

export type ViewOptionsProps = {
  displayType: string;
}

export const ViewOptions = ({
  displayType,
}: ViewOptionsProps) => {
  // STATE && VARIABLES
  const [display, setDisplay] = useState(displayType || 'grid');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // EVENTS
  const updateDisplayParams = useCallback((type: string) => {
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
    <div className="flex flex-row justify-start items-center">
      {['grid', 'list'].map((option: string) => (
        <OptionTab
          key={option}
          onClick={() => updateDisplayParams(option)}
          option={display}
          currentOption={option}
        />
      ))}
    </div>
  )
}