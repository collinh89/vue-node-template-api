export interface BaseUser {
  name: string;
  auth0Id: string;
}

export interface User extends BaseUser {
  id: number;
}
