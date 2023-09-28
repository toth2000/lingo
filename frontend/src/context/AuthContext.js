import { createContext, useEffect, useState } from "react";

import { validateObject } from "../utils/validateObject";

export const AuthContext = createContext({
  accessToken: "",
  refreshToken: "",
});

export const useAuthContext = () => {
  const [authState, setAuthState] = useState({
    accessToken: "",
    refreshToken: "",
  });

  useEffect(() => {
    try {
      validateObject();
      const data = localStorage.getItem("auth");
      if (data !== null) {
        const localData = JSON.parse(data);

        if (validateObject(localData, ["accessToken", "refreshToken"])) {
          setAuthState(localData);
        }
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }, []);

  const setAuthData = (accessToken, refreshToken) => {
    const auth = { accessToken, refreshToken };
    setAuthState(auth);
    localStorage.setItem("auth", JSON.stringify(auth));
  };

  const getAuthData = () => {
    return authState;
  };

  const deleteAuthData = () => {
    localStorage.clear();
    setAuthData({ accessToken: "", refreshToken: "" });
  };

  return { setAuthData, getAuthData, deleteAuthData };
};
