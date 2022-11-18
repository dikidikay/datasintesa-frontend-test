import { createContext, useReducer } from "react";
import usersReducer from "./UsersReducer";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
