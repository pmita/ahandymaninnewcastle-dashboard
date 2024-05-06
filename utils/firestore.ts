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