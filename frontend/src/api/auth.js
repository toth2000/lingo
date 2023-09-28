import { API } from ".";
import {
  LOGIN_ENDPOINT,
  REFRESH_TOKEN_ENDPOINT,
  REGISTER_USER_ENDPOINT,
} from "../constant/apiUrl";

export const login = ({ email, password }) => {
  return API.post(`${LOGIN_ENDPOINT}`, {
    email: email,
    password: password,
  });
};

export const register = ({ name, email, password }) => {
  return API.post(`${REGISTER_USER_ENDPOINT}`, {
    name: name,
    email: email,
    password: password,
  });
};

export const refreshToken = (refreshToken) => {
  return API.post(`${REFRESH_TOKEN_ENDPOINT}`, {
    refreshToken: refreshToken,
  });
};
