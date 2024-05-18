// DATA
import { getCollectionData } from '@/data/firestore';
// COMPONENTS
import { TableContainer } from '../_components/table-container';
import { ContainerOptions } from '../_components/container-options';
import { GridContainer } from '../_components/grid-container';


export default async function DashboardPage({ searchParams }: { searchParams: any }) {
  // SERVER LAND
  const data = await getCollectionData('queries', searchParams);

  return (
    <>
    <ContainerOptions displayType={searchParams.display} />

    {searchParams.display === 'grid' && (
      <GridContainer data={data} />
    )}

    {searchParams.display === 'list' && (
      <div className="overflow-x-auto">
        <TableContainer data={data} /> 
      </div>
    )}
    </>
  )
}