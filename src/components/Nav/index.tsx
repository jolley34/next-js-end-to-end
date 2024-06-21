import styles from "./Nav.module.css";

export function Nav() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <input
            className={styles.search}
            type="text"
            placeholder="search event/users..."
          ></input>
          <div className={styles.listItem}>Login</div>
          <div className={styles.listItem}>Register</div>
        </div>
      </div>
    </>
  );
}
