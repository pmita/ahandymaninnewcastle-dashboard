// DATA
import { getCollectionData } from '@/data/firestore';
// COMPONENTS
import { TableContainer } from '../_components/table-container';
import { ContainerOptions } from '../_components/container-options';
import { GridContainer } from '../_components/grid-container';
import { QueryOptions } from '../_components/query-options';


export default async function DashboardPage({ searchParams }: { searchParams: any }) {
  // SERVER LAND
  const data = await getCollectionData('queries', searchParams);

  // FUNCTIONS
  const renderContainer = (displayOption: string) => {
    switch(displayOption) {
      case 'list':
        return (
          <div className="overflow-x-auto mt-4">
            < TableContainer data={data} /> 
          </div>
        );
      case 'grid':
      default:
        return (
          <GridContainer data={data} />
        );
    }
  }

  return (
    <>
      <section className="flex flex-row justify-between items-stetch flex-wrap">
        <QueryOptions itemStatus={searchParams.status} />
        <ContainerOptions displayType={searchParams.display} />
      </section>
      {renderContainer(searchParams.display)}
    </>
  )
}