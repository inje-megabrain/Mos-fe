import axios from "axios";
import { BASE_URL } from "./constants";
import { IToken } from "../types/user";

const ACCESS_HEADER_KEY = "accessToken";
const REFRESH_HEADER_KEY = "refreshToken";
const TOKEN_TYPE = "Bearer";

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

client.interceptors.request.use((req) => {
  return req;
});

client.interceptors.response.use((res) => {
  if (res.status === 200 && res.data) {
    const token = res.data as { accessToken?: string; refreshToken?: string };
    if (token.accessToken) {
      setAccessToken(token.accessToken);
      window.localStorage.setItem("accessToken", token.accessToken);
    }
    if (token.refreshToken) {
      setRefreshToken(token.refreshToken);
      window.localStorage.setItem("refreshToken", token.refreshToken);
    }
  }
  return res;
});

export const setAccessToken = (token: string) => {
  if (token) {
    client.defaults.headers.common[ACCESS_HEADER_KEY] = `${token}`;
  } else {
    delete client.defaults.headers.common[ACCESS_HEADER_KEY];
  }
};

export const setRefreshToken = (token: string) => {
  if (token) {
    client.defaults.headers.common[REFRESH_HEADER_KEY] = `${token}`;
  } else {
    delete client.defaults.headers.common[REFRESH_HEADER_KEY];
  }
};

// export const setAuthHeader = (token: IToken) => {
//   setAccessToken(token.accessToken);
//   console.log(token.accessToken);
//   setRefreshToken(token.refreshToken);
//   console.log(token.refreshToken);
// };

export default client;
