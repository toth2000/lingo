import { useState } from "react";

export const useInput = (initialStateObject) => {
  const [state, setState] = useState(initialStateObject);

  const handleInput = (event) => {
    setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const validateInputFields = (keys = Object.keys(state)) => {
    const valid = keys.every((item) => (state[item] ? true : false));

    return valid;
  };

  return { state, handleInput, validateInputFields };
};
