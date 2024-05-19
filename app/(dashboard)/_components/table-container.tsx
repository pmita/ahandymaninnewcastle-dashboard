// COMPONENTS
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FormatedTime } from "@/components/formated-time"
import { Status } from "@/components/status"
import { ContainerCTA } from "./container-cta"


export const TableContainer = ({ data }: { data: any }) => {
    return (
        <Table className="divide-y-2 divide-gray-200 bg-white">
            <TableContainerHeader />
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
                        <TableCell className="flex flex-row gap-2">
                            <ContainerCTA itemId={item.id} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export const TableContainerHeader = () => {
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