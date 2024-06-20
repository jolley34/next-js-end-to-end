import styles from "./FollowCompanyBar.module.css";

export function FollowCompanies() {
  return (
    <>
      <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "600" }}>
        Companies to follow
      </div>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="https://seeklogo.com/images/C/Coca-Cola-logo-108E6559A3-seeklogo.com.png"
            ></img>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
            ></img>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1280px-Disney_wordmark.svg.png"
            ></img>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="https://1000logos.net/wp-content/uploads/2020/10/AMC-Theatres-Logo.png"
            ></img>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/884px-Pepsi_logo_2014.svg.png?20230629035322"
            ></img>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="https://seeklogo.com/images/M/mrbeast-logo-DDADF44FFB-seeklogo.com.png"
            ></img>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Koenigsegg-logo-1994-2048x2048.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
