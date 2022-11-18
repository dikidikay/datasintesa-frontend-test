import axios from "axios";

const USERS_URL = "https://randomuser.me/api";

const user = axios.create({
  baseURL: USERS_URL,
});

// Get Users Data
export const getUsers = async () => {
  const response = await user.get("?page=1&results=100");

  return response.data.results;
};

// Get Users By Nationality
export const getUsersFiltered = async (nat) => {
  const response = await user.get(`?page=1&results=100&nat=${nat}`);

  return response.data.results;
};
