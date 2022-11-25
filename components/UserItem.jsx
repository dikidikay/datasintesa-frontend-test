import { Card, List, Avatar, Button, Modal } from "antd";
import styles from "./UserItem.module.css";
import moment from "moment";

const UserItem = ({ item }) => {
  // Membuat moment object dari tanggal lahir
  const date = moment(item.dob.date);

  // Format tanggal lahir (dob) menjadi DD/MM/YYYY, HH:mm:ss
  const dateFormatted = date.format("DD/MM/YYYY, HH:mm:ss");

  // Kalkulasi field usia
  const age = moment().diff(date, "years");

  // User Data Content
  const userDataContent = (
    <>
      <p>
        <span className={styles.title}>Name</span>
        <span>{`${item.name.title} ${item.name.first} ${item.name.last}`}</span>
      </p>
      <p>
        <span className={styles.title}>Email</span>
        <span>{item.email}</span>
      </p>
      <p>
        <span className={styles.title}>City</span>
        <span>{item.location.city}</span>
      </p>
      <p>
        <span className={styles.title}>Born Date</span>
        <span>{dateFormatted}</span>
      </p>
      <p>
        <span className={styles.title}>Age</span>
        <span>{age}</span>
      </p>
    </>
  );

  // Modal Handler
  const detailHandler = () => {
    Modal.info({
      icon: false,
      content: (
        <div className={styles.cardContent}>
          <Avatar className={styles.avatarDetail} src={item.picture.large} />
          {userDataContent}
          <p>
            <span className={styles.title}>Address</span>
            <span>{`${item.location.street.number} ${item.location.street.name}, ${item.location.city}, ${item.location.country}`}</span>
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <List.Item key={item.login.uuid}>
      <Card className={styles.card} bodyStyle={{ padding: "1.2rem" }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <List.Item.Meta avatar={<Avatar src={item.picture.thumbnail} />} />
          <Button onClick={detailHandler}>Detail</Button>
        </div>

        <div className={styles.cardContent}>{userDataContent}</div>
      </Card>
    </List.Item>
  );
};

export default UserItem;
