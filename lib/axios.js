import axios from "axios";

const USERS_URL = "https://randomuser.me/api";

const user = axios.create({
  baseURL: USERS_URL,
});

// Get Users Data
export const getUsers = async (nat, page) => {
  const response = await user.get(
    `?page=${page}&results=10&nat=${nat}&seed=abc`
  );
  console.log(response.config.url);
  return response.data.results;
};
