// FIREBASE
import { firestore } from "@/firebase/server/config";
// UTILS
import { applyFirestoreFilters } from "@/utils/firestore";

export const getCollectionData = async (collectionRef: string, filters = { status: null, sort: null }) => {
  const docsRef = firestore.collection(collectionRef);

  const docsWithFilters = applyFirestoreFilters(docsRef, filters);

  const snapshot = await docsWithFilters.get();
  const data = snapshot.docs.map((doc: { id: any; data: () => { (): any; new(): any; createdAt: { (): any; new(): any; toDate: { (): any; new(): any; }; }; }; }) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt.toDate(),
    lastUpdated: doc.data().createdAt.toDate(),
  }));
  return data;
}