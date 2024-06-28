'use client'

// NEXT
import { useSearchParams } from "next/navigation"
// COMPONENTS
import { GridContainer } from "./grid-container";
import { TableContainer } from "./table-container";
// TYPES
import { IFirestoreItem } from "@/types/firestore";

export const ToggleContainer = ({ data }: { data: IFirestoreItem[] | null } ) => {
    // STATE && VARIABLES
    const searchParams = useSearchParams();
    const display = searchParams.get('display');

    // EVENTS
    const renderView = (displayOption: string | null) => {
        switch(displayOption) {
            case 'list':
                return (
                    <div className="overflow-x-auto mt-4">
                        <TableContainer data={data} /> 
                    </div>
                );
            case 'grid':
            default:
                return <GridContainer data={data} />;
        }
    }

    return renderView(display);
}