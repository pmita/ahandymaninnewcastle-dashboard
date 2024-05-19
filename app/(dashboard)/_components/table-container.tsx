// NEXT
import Link from "next/link";
// COMPONENTS
import { buttonVariants } from "@/components/ui/button";
import { FormatedTime } from "@/components/formated-time";
// UTILS
import { cn } from "@/utils/helpers";

export const TableContainer = ({ data }: { data: any }) => {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <TableRow
          name="Name"
          email="Email"
          createdAt="createdAt"
          />
      </thead>

      {data && data.map((item: any) => (
        <TableRow
          key={item.id}
          itemId={item.id}
          name={item.fullName}
          email={item.email}
          createdAt={item.createdAt.toString()}
        />
      ))}

    </table>
  )
}

export const TableRow = ({
  itemId,
  name,
  email,
  createdAt,
}: {
  itemId?: string;
  name: string;
  email: string;
  createdAt: any;
}) => {
  console.log('test')
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{name}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <FormatedTime time={createdAt} />
      </td>
      <td className="whitespace-nowrap px-4 py-2">
      <Link 
        className={cn(buttonVariants({ variant: 'alternateOutlined', size: 'sm' }))}
        href={`/dashboard/${itemId}`}
      >
        Edit
      </Link>
    </td>
    </tr>
  )
}