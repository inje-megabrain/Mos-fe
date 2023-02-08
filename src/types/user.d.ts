export interface IUser {
  id: string;
  password: string;
}

export interface IToken {
  access: string;
  refresh: string;
}
