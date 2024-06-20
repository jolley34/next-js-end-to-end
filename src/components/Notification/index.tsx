import { IoIosNotificationsOutline } from "react-icons/io";
import styles from "./Notification.module.css";

export function NotificationBell() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <div className={styles.wrapper}>
          <IoIosNotificationsOutline className={styles.icon} />
          <div className={styles.text}>Notify me</div>
        </div>
      </div>
    </>
  );
}
