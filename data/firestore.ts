// FIREBASE
import { firestore } from "@/firebase/server/config";
// UTILS
import { applyFirestoreFilters } from "@/utils/firestore";
// TYPES
import { IFirestoreFilters } from "@/types/firestore";

export const getCollectionData = async (collectionRef: string, filters: IFirestoreFilters) => {
  const docsRef = firestore.collection(collectionRef).limit(2);

  const docsWithFilters = applyFirestoreFilters(docsRef, filters);

  const snapshot = await docsWithFilters.get();
  const data = snapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toMillis() ?? null,
    lastUpdated: doc.data().lastUpdated?.toMillis() ?? null,
    // createdAt: doc.data().createdAt.toDate() ?? null,
    // lastUpdated: doc.data().lastUpdated.toDate() ?? null,
  }));
  return data as FirebaseFirestore.DocumentData[] | [];
}

export const getDocumentData = async (collectionRef: string, documentRef: string) => {
  const docRef = firestore.collection(collectionRef).doc(documentRef);

  const snapshot = await docRef.get();
  const docData = snapshot.data();

  return {
    id: snapshot.id,
    ...docData,
    createdAt: docData?.createdAt.toDate() ?? null,
    lastUpdated: docData?.lastUpdated.toDate() ?? null,
  } as FirebaseFirestore.DocumentData | null;
}