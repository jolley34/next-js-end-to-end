import { MdVerified } from "react-icons/md";
import CountdownBar from "../CountdownBar";
import { LikeButton } from "../Like";
import { NotificationBell } from "../Notification";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  image: string;
  user: any;
  isVerified: boolean;
}

export function Card({
  title,
  description,
  image,
  user,
  isVerified,
}: CardProps) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <div className={styles.card}>
            <div className={styles.cardWrapper}>
              <CountdownBar />
              <img src={image} className={styles.img}></img>
              <div className={styles.contentWrapper}>
                <div className={styles.spaceBetween}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                      }}
                    >
                      <div className={styles.eventTitle}>{user}</div>
                      {isVerified && <MdVerified className={styles.icon} />}
                    </div>

                    <div className={styles.eventTitle}>{title}</div>
                    <div className={styles.eventDescription}>{description}</div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "0.75rem",
                        fontWeight: "700",
                      }}
                    >
                      <span>34 350 </span>
                      likes
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <LikeButton />
                    <NotificationBell />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
