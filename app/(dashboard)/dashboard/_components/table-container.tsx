// NEXT
import Link from "next/link"
// COMPONENTS
import {
    Table,
    TableBody, 
    TableCell, 
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { FormatedTime } from "@/components/formated-time"
import { Status } from "@/components/status"
import { QuickView } from "./quick-view"
import { buttonVariants } from "@/components/ui/button"
// UTILS
import { cn } from "@/utils/helpers"
// TYPES
import { IFirestoreItem } from "@/types/firestore"


export const TableContainer = ({ data }: { data: IFirestoreItem[] | null }) => {

    if (!data) return null;
    
    return (
        <Table className="divide-y-2 divide-gray-200 bg-white">
            <ContainerHeader />
            <TableBody>
                {data && data.map((item: any) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            {item.fullName}
                        </TableCell>
                        <TableCell>
                            {item.email}
                        </TableCell>
                        <TableCell>
                            <FormatedTime time={item.createdAt} />
                        </TableCell>
                        <TableCell className="text-center">
                            <Status status={item.status} />
                        </TableCell>
                        <TableCell className="flex flex-row justify-center gap-2">
                            <Link 
                                className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}
                                href={`/dashboard/${item.id}`}
                            >
                                Edit
                            </Link>
                            <QuickView item={item} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export const ContainerHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>{"Full Name"}</TableHead>
                <TableHead>{"Email"}</TableHead>
                <TableHead>{"Date"}</TableHead>
                <TableHead>{"Status"}</TableHead>
                <TableHead>{"Actions"}</TableHead>
            </TableRow>
        </TableHeader>
    );
}