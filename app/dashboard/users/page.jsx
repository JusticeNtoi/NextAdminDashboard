import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/search";

const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
      </div>
      <table className={styles.table}></table>
    </div>
  );
};

export default Users;
