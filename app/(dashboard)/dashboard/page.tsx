export const dynamic = 'force-dynamic';

// DATA
import { getCollectionData } from '@/data/firestore';
// COMPONENTS
import { ViewOptions } from './_components/view-options';
import { FilterOptions } from './_components/filter-options';
import { RealtimeItems } from './_components/realtime-items';
// TYPES
import { IFirestoreItem } from '@/types/firestore';


export default async function DashboardPage({ searchParams }: { searchParams: any }) {
  // SERVER LAND
  const data = await getCollectionData('queries', searchParams);

  return (
    <>
      <section className="flex flex-row justify-between items-stetch flex-wrap">
        <FilterOptions itemStatus={searchParams.status} />
        <ViewOptions displayType={searchParams.display} />
      </section>

      <RealtimeItems data={data as IFirestoreItem[]} />
    </>
  )
}