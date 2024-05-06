// DATA
import { getCollectionData } from '@/data/firestore';
// COMPONENTS
import { TableContainer } from '../_components/table-container';


export default async function DashboardPage({ searchParams }: { searchParams: any }) {
  // SERVER LAND
  const data = await getCollectionData('queries', searchParams);

  return (
    <div className="overflow-x-auto">
      <TableContainer data={data} /> 
    </div>
  )
}