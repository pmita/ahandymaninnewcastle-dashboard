"use client"

// NEXT
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// REACT
import { useCallback, useState } from "react";
// COMPONENTS
import { OptionTab } from "./option-tab";

export type ContainerOptionsProps = {
  displayType: string;
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
    <div className="flex flex-row justify-start items-center">
      {['grid', 'list'].map((option: string) => (
        <OptionTab
          key={option}
          onClick={() => updateDisplayType(option)}
          option={display}
          currentOption={option}
        />
      ))}
    </div>
  )
}