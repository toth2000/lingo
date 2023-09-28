import { createContext, useEffect, useState } from "react";

import { validateObject } from "../utils/validateObject";

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
    try {
      validateObject();
      const data = localStorage.getItem("auth");
      if (data !== null) {
        const localData = JSON.parse(data);

        if (
          validateObject(localData, ["userId", "accessToken", "refreshToken"])
        ) {
          setAuthState(localData);
        }
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }, []);

  const setAuthData = (userId, accessToken, refreshToken) => {
    const auth = { userId, accessToken, refreshToken };
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
