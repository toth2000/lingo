import { API } from ".";
import { GET_LEADERBOARD_ENDPOINT } from "../constant/apiUrl";

export const getLeaderboard = () => {
  return API.get(`${GET_LEADERBOARD_ENDPOINT}`);
};
