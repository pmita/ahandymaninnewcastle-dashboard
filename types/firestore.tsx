
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