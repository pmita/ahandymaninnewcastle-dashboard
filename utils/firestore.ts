// TYPES
import { IFirestoreFilters } from "@/types/firestore";

export const applyFirestoreFilters =  (ref: any, { status = null, sort = null }: IFirestoreFilters) => {
  if ( status && ['INITIAL', 'PROGRESSED', 'COMPLETED'].includes(status)) {
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