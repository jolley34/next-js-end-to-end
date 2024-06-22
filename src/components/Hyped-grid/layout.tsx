import styles from "./HypedGrid.module.css";

export function HypedGridLayout() {
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <div className={styles.flex}>
        <div className={styles.mainTitle}>Most hyped Events</div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div className={styles.subTitle}>Today</div>
          <div style={{ color: "gray" }} className={styles.subTitle}>
            This week
          </div>
          <div style={{ color: "gray" }} className={styles.subTitle}>
            This month
          </div>
          <div style={{ color: "gray" }} className={styles.subTitle}>
            This year
          </div>
        </div>
      </div>
    </div>
  );
}
