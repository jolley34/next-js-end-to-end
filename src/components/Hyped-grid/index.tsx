import { MdVerified } from "react-icons/md";

import CountdownBar from "../CountdownBar";
import { NotificationBell } from "../Notification";
import styles from "./HypedGrid.module.css";

export function HypedGrid() {
  return (
    <>
      <div className={styles.wrapper}>
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

          <div className={styles.gridContainer}>
            <div className={styles.card}>
              <div className={styles.cardWrapper}>
                <CountdownBar />
                <img
                  src="https://www.hdcarwallpapers.com/walls/2020_tesla_roadster_4k_3-HD.jpg"
                  className={styles.img}
                ></img>
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
                        <div className={styles.eventTitle}>Tesla</div>

                        <MdVerified className={styles.icon} />
                      </div>

                      <div className={styles.eventTitle}>Tesla Roadster</div>
                      <div className={styles.eventDescription}>
                        Tesla Roadster release date is here, are you ready for
                        the future?
                      </div>
                    </div>
                    <NotificationBell />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardWrapper}>
                <CountdownBar />
                <img
                  src="https://i.cbc.ca/1.7225575.1717611712!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/starship.jpg"
                  className={styles.img}
                ></img>
                <div className={styles.contentWrapper}>
                  <div className={styles.eventTitle}>SpaceX Starship</div>
                  <div className={styles.eventDescription}>
                    Next launch is taking place soon..
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
