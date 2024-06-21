import { IoIosHeartEmpty } from "react-icons/io";

import styles from "./Like.module.css";

export function LikeButton() {
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
          <IoIosHeartEmpty className={styles.icon} />
          <div className={styles.text}>Like</div>
        </div>
      </div>
    </>
  );
}
