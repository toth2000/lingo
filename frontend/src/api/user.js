import { API } from ".";
import { GET_USER_BY_ID_ENDPOINT } from "../constant/apiUrl";

export const getUserById = (userId) => {
  return API.get(`${GET_USER_BY_ID_ENDPOINT}/${userId}`);
};
