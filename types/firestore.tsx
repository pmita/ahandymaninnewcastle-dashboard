
export type queryDocumentType = {
  id: string;
  email: string;
  fullName: string;
  location?: string;
  mobile: string;
  additionalInfo?: string;
  createdAt: number | string;
  lastUpdated: number | string;
  status: queryStatus;
  comments?: queryComments[] | [];
}

export enum queryStatus {
  INITIAL = 'INITIAL',
  PROGRESSED = 'PROGRESSED',
  COMPLETED = 'COMPLETED',
}

export type queryCommentType = {
  content: string;
  createdAt: number | string;
  status: queryStatus;
  id: string;
}

export type queryComments = {
  id: string;
  content: string;
  status: queryStatus;
  createdAt: number | string;
}

export interface IComments {
  comments: commentType[];
}

export type commentType = {
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