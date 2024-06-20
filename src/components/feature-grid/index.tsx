import CountdownBar from "../CountdownBar";
import styles from "./FeatureGrid.module.css";

export function FeatureGrid() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <div className={styles.cardWrapper}>
              <CountdownBar />
              <img
                src="https://www.hdcarwallpapers.com/walls/2020_tesla_roadster_4k_3-HD.jpg"
                className={styles.img}
              ></img>
              <div className={styles.contentWrapper}>
                <div className={styles.eventTitle}>Tesla Roadster</div>
                <div className={styles.eventDescription}>
                  Tesla Roadster release date is here, are you ready for the
                  future?
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
    </>
  );
}
