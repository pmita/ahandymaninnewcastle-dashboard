// TYPES
import { IFirestoreFilters } from "@/types/firestore";

export const applyFirestoreFilters =  (ref: any, { status = null, sort = null }: IFirestoreFilters) => {
  // Bring items based on status
  if ( status && ['INITIAL', 'PROGRESSED', 'COMPLETED'].includes(status)) {
    ref = ref.where('status', '==', status);
  }

  // Bring items based on their createdAt date
  switch(sort) {
    case 'asc':
      ref = ref.orderBy('createdAt', 'asc');
      break;
    case 'desc':
    default:
      ref = ref.orderBy('createdAt', 'desc');
      break;
  }

  return ref;
}