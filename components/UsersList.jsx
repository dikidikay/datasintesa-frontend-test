import { List } from "antd";
import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

import { useEffect, useContext } from "react";
import UsersContext from "context/UsersContext";
import { getUsers } from "context/UsersActions";
import UsersFilter from "./UsersFilter";

const UsersList = () => {
  const { users, dispatch, loading } = useContext(UsersContext);

  // Fetch data user, lalu simpan di context
  useEffect(() => {
    dispatch({
      type: "SET_LOADING",
    });

    const getUsersData = async () => {
      const userData = await getUsers();

      dispatch({
        type: "GET_USERS",
        payload: userData,
      });
    };

    getUsersData();
  }, [dispatch]);

  return (
    <>
      <div className={styles.listHeader}>
        <h2 className="headingSecondary">List Users</h2>
        <UsersFilter />
      </div>
      <List
        loading={loading}
        locale={{ emptyText: <></> }}
        grid={{
          gutter: 16,
          column: 2,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
          xxl: 5,
        }}
        dataSource={users}
        renderItem={(item) => <UserItem item={item} />}
        pagination={
          users.length > 0 && {
            simple: true,
            style: { textAlign: "center" },
          }
        }
      />
    </>
  );
};

export default UsersList;
