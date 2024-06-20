import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <div className={styles.logo}>event.com</div>
          <div
            style={{ color: "white", fontSize: "0.75rem", fontWeight: "200" }}
          >
            prototype build v.0.1
          </div>
        </div>
      </div>
    </>
  );
}
