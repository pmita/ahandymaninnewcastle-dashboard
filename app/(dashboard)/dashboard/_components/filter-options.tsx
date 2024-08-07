"use client"

// NEXT
import { useSearchParams, usePathname, useRouter } from "next/navigation";
// REACT
import { useCallback, useState } from "react"
// COMPONENTS
import { OptionTab } from "./option-tab";


export const FilterOptions = ({ itemStatus }: { itemStatus: string }) => {
  // STATE & VARIABLES
  const [status, setStatus] = useState(itemStatus || 'ALL');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // EVENTS
  const updateStatusParams = useCallback((queryStatus: string) => {
    const params = new URLSearchParams(searchParams);

    switch(queryStatus) {
      case 'INITIAL':
        params.set('status', 'INITIAL');
        break;
      case 'PROGRESSED':
        params.set('status', 'PROGRESSED');
        break;
      case 'COMPLETED':
        params.set('status', 'COMPLETED');
        break;
      default:
        params.set('status', 'ALL');
        break;
    }

    setStatus(queryStatus);
    replace(`${pathname}?${params.toString()}`);
  }, [replace, searchParams, pathname]);

  return (
    <div className="flex flex-row justify-start items-center gap-2">
      {['ALL', 'INITIAL', 'PROGRESSED', 'COMPLETED'].map((option: string) => (
        <OptionTab
          key={option}
          onClick={() => updateStatusParams(option)}
          option={status}
          currentOption={option}
        />
      ))}
    </div>
  )
}