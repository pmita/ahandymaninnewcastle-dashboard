// DATA
import { getCollectionData } from '@/data/firestore';
// COMPONENTS
import { TableContainer } from './_components/table-container';
import { ViewOptions } from './_components/container-options';
import { GridContainer } from './_components/grid-container';
import { FilterOptions } from './_components/filter-options';


export default async function DashboardPage({ searchParams }: { searchParams: any }) {
  // SERVER LAND
  const data = await getCollectionData('queries', searchParams);

  // FUNCTIONS
  const renderContainer = (displayOption: string) => {
    switch(displayOption) {
      case 'list':
        return (
          <div className="overflow-x-auto mt-4">
            <TableContainer data={data} /> 
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
        <FilterOptions itemStatus={searchParams.status} />
        <ViewOptions displayType={searchParams.display} />
      </section>
      {renderContainer(searchParams.display)}
    </>
  )
}