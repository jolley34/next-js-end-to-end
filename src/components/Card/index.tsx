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
    <div className={styles.wrapper} data-cy="featured-event">
      <div className={styles.flex}>
        <div className={styles.card}>
          <div className={styles.cardWrapper}>
            <CountdownBar />
            <img src={image} className={styles.img} alt="Event Image" />
            <div className={styles.contentWrapper}>
              <div className={styles.spaceBetween}>
                <div className={styles.userWrapper}>
                  <div className={styles.user}>
                    {isVerified && <MdVerified className={styles.icon} />}
                  </div>
                </div>
                <div className={styles.eventDetails}>
                  <div className={styles.eventTitle} data-cy="event-title">
                    {title}
                  </div>
                  <div
                    className={styles.eventDescription}
                    data-cy="event-description"
                  >
                    {description}
                  </div>
                  <div className={styles.likesCount}>
                    <span>34,350</span> likes
                  </div>
                </div>
                <div className={styles.actions}>
                  <LikeButton />
                  <NotificationBell />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
