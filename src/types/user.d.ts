export interface IUser {
  id: string;
  password: string;
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}
