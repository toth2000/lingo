import { createContext, useEffect, useState } from "react";

import { validateObject } from "../utils/validateObject";
import {
  clearLocalStorage,
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorage";

export const AuthContext = createContext({
  userId: "",
  accessToken: "",
  refreshToken: "",
});

export const useAuthContext = () => {
  const [authState, setAuthState] = useState({
    userId: "",
    accessToken: "",
    refreshToken: "",
  });

  useEffect(() => {
    const localData = getLocalStorageItem("auth");

    if (validateObject(localData, ["userId", "accessToken", "refreshToken"])) {
      setAuthState(localData);
    }
  }, []);

  const setAuthData = (userId, accessToken, refreshToken) => {
    const auth = { userId, accessToken, refreshToken };
    setAuthState(auth);
    setLocalStorageItem("auth", auth);
  };

  const getAuthData = () => {
    return authState;
  };

  const deleteAuthData = () => {
    clearLocalStorage();
    setAuthData({ accessToken: "", refreshToken: "" });
  };

  return { setAuthData, getAuthData, deleteAuthData };
};
