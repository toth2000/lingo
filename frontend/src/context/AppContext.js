import { createContext, useState } from "react";

export const AppContext = createContext({
  loading: false,
});

export const useAppContext = () => {
  const [appState, setAppState] = useState({
    loading: false,
  });

  const setLoading = (value) => {
    setAppState(value);
  };

  const isLoading = () => {
    return appState.loading;
  };

  return { appState ,setLoading, isLoading };
};
