export interface IFirestoreItem extends FirebaseFirestore.DocumentData {
  id: string;
  email: string;
  fullName: string;
  location?: string;
  mobile: string;
  additionalInfo?: string;
  status: queryStatus;
  createdAt: number | string;
  lastUpdated: number | string;
}

export enum queryStatus {
  INITIAL = 'INITIAL',
  PROGRESSED = 'PROGRESSED',
  COMPLETED = 'COMPLETED',
}
export interface IComments {
  comments: firestoreComment[];
}

export type firestoreComment = {
  content: string;
  createdAt: number | string;
  status: queryStatus;
  lastUpdated: number | string;
  id: string;
}

// FILTERS
export interface IFirestoreFilters {
  status?: string | null;
  sort?: string | null;
}