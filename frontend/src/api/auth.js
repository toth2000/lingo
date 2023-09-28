import { API } from ".";
import { REFRESH_TOKEN_ENDPOINT } from "../constant/apiUrl";

export const refreshToken = (refreshToken) => {
  return API.post(`${REFRESH_TOKEN_ENDPOINT}`, {
    refreshToken: refreshToken,
  });
};
