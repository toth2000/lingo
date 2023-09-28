import { API } from ".";
import { GET_LANGUAGE_LIST_ENDPOINT } from "../constant/apiUrl";

export const getLanguageList = () => {
  return API.get(`${GET_LANGUAGE_LIST_ENDPOINT}`);
};
