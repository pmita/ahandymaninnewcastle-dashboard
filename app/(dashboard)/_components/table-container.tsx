// COMPOPNENTS
import { TableRow } from './table-row'

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
          name={item.fullName}
          email={item.email}
          createdAt={item.createdAt.toString()}
        />
      ))}

    </table>
  )
}