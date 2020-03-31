import Poll from './poll';

export enum Visibility {
  PUBLIC = 'public',
  UNLISTED = 'unlisted',
  PRIVATE = 'private'
}

export enum Authorization {
  OPEN = 'open',
  EMAIL = 'email',
  CODE = 'code',
  CUSTOM = 'custom',
  KEYBASE = 'keybase',
}

export default interface Voting {
  id: string;
  slug: string;
  title: string;
  issueAccountId: string;
  assetCode: string;
  polls: Poll[];
  distributionAccountId: string;
  ballotBoxAccountId: string;
  authorization: Authorization;
  authorizationOptions: any | undefined;
  visibility: Visibility;
  encrypted: boolean;
  votesCap: number;
  startDate: Date;
  endDate: Date;
}