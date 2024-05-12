
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
}

export enum queryStatus {
  INITIAL = 'INITIAL',
  PROGRESSED = 'PROGRESSED',
  COMPLETED = 'COMPLETED',
}

export type queryCommentType = {
  content: string;
  createdAt: number | string;
  id: string;
}

export type queryComments = {
  id: string;
  content: string;
  status: queryStatus;
  createdAt: number | string;
}