import { API } from ".";
import { GET_STATISTIC_BY_ID_ENDPOINT } from "../constant/apiUrl";

export const getStatisticById = (userId) => {
  return API.get(`${GET_STATISTIC_BY_ID_ENDPOINT}/${userId}`);
};
