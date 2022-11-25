import styles from "./UsersFilter.module.css";

const UsersFilter = ({ setNat, setPage }) => {
  const filterHandler = (e) => {
    setNat(e.target.value);
    setPage(1);
  };

  return (
    <div className={styles.usersFilterControl}>
      <label>Filter By Nationality</label>
      <select onChange={filterHandler}>
        <option value={""}>No Filter</option>
        <option value={"us"}>American</option>
        <option value={"au"}>Australian</option>
        <option value={"br"}>Brazilian</option>
        <option value={"gb"}>British</option>
        <option value={"ca"}>Canadian</option>
        <option value={"dk"}>Danish</option>
        <option value={"nl"}>Dutch</option>
        <option value={"fr"}>French</option>
        <option value={"fi"}>Finnish</option>
        <option value={"de"}>German</option>
        <option value={"ie"}>Irish</option>
        <option value={"ir"}>Iranian</option>
        <option value={"no"}>Norwegian</option>
        <option value={"nz"}>New Zealander</option>
        <option value={"tr"}>Turkish</option>
        <option value={"ch"}>Swiss</option>
        <option value={"es"}>Spanish</option>
      </select>
    </div>
  );
};

export default UsersFilter;
