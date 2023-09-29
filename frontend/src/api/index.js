import axios from "axios";

import { API_URL } from "../constant/apiUrl";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorage";
import { refreshToken } from "./auth";

export const API = axios.create({ baseURL: API_URL });

API.interceptors.request.use((req) => {
  const data = getLocalStorageItem("auth");

  if (data) {
    req.headers.token = `Bearer ${data.accessToken}`;
  }

  return req;
});

API.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err?.response?.data?.refreshTokenExpired === true) {
      localStorage.clear();
      window.location.href = "/";
      return;
    }

    if (err?.response?.data?.accessTokenExpired === true) {
      const authData = getLocalStorageItem("auth");

      if (authData) {
        try {
          const { data } = await refreshToken(authData.refreshToken);

          setLocalStorageItem("auth", {
            ...authData,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          });

          // Retry Request
          return API.request(err.config);
        } catch (error) {
          console.error("Error Refreshing Token\n", error, error.response);
        }
      }
    }
    return Promise.reject(err);
  }
);
