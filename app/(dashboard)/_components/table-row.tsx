
export const TableRow = ({
  name,
  email,
  createdAt,
}: {
  name: string;
  email: string;
  createdAt: string;
}) => {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{name}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{createdAt}</td>
      <td className="whitespace-nowrap px-4 py-2">
        <a
          href="#"
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          View
        </a>
      </td>
    </tr>
  )
}