import { List } from "antd";
import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

import { useEffect, useState } from "react";
import { getUsers } from "lib/axios";
import UsersFilter from "./UsersFilter";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nat, setNat] = useState(undefined);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    const getUsersData = async () => {
      const userData = await getUsers(nat, page);

      setUsers(userData);
      setLoading(false);
    };

    getUsersData();
  }, [page, nat]);

  return (
    <>
      <div className={styles.listHeader}>
        <h2 className="headingSecondary">List Users</h2>
        <UsersFilter setNat={setNat} setPage={setPage} />
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
            pageSize: 10,
            total: 100,
            onChange: (page) => {
              setPage(page);
            },
            current: page,
          }
        }
      />
    </>
  );
};

export default UsersList;
