import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo}>event.io</div>
      </div>
    </>
  );
}
