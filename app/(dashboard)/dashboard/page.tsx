import { firestore } from 'firebase/server/config';
import { TableRow } from '../_components/table-row';
import { TableContainer } from '../_components/table-container';

export const getFirestoreData = async (collectionRef: string, filters = { status: null, sort: null }) => {
  const docsRef = firestore.collection(collectionRef);

  const docsWithFilters = applyFirestoreFilters(docsRef, filters);

  console.log(docsWithFilters.toString());

  const snapshot = await docsWithFilters.get();
  const data = snapshot.docs.map((doc: { id: any; data: () => { (): any; new(): any; createdAt: { (): any; new(): any; toDate: { (): any; new(): any; }; }; }; }) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt.toDate(),
    lastUpdated: doc.data().createdAt.toDate(),
  }));
  return data;
}

export const applyFirestoreFilters =  (ref: any, { status, sort }: { status: any, sort: any }) => {
  if ( status ) {
    ref = ref.where('status', '==', status);
  }

  if ( !sort ) {
      switch(sort) {
        case 'asc':
          ref = ref.orderBy('createdAt', 'asc');
          break;
        case 'desc':
          ref = ref.orderBy('createdAt', 'desc');
          break;
        default:
          break;
      }
  }

  return ref;
}

export default async function DashboardPage({ searchParams }: { searchParams: any }) {
  const data = await getFirestoreData('queries', searchParams);
  console.log(searchParams);

  console.log(data);
  return (
    <div className="overflow-x-auto">
      <TableContainer data={data} /> 
    </div>
  )
}