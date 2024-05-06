// FIREBASE
import { firestore } from "@/firebase/server/config";
// UTILS
import { applyFirestoreFilters } from "@/utils/firestore";

export const getCollectionData = async (collectionRef: string, filters = { status: null, sort: null }) => {
  const docsRef = firestore.collection(collectionRef);

  const docsWithFilters = applyFirestoreFilters(docsRef, filters);

  const snapshot = await docsWithFilters.get();
  const data = snapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt.toDate(),
    lastUpdated: doc.data().lastUpdated.toDate(),
  }));
  return data;
}

export const getCollectionDocument = async (collectionRef: string, documentRef: string) => {
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