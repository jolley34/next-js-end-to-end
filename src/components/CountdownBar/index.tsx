import styles from "./CountdownBar.module.css";

export default function CountdownBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.time}>
          <span>2</span> days
        </div>
        <div className={styles.time}>
          <span>10</span> hours
        </div>
        <div className={styles.time}>
          <span>55</span> minutes
        </div>
        <div className={styles.time}>
          <span>3</span> seconds
        </div>
      </div>
    </div>
  );
}
