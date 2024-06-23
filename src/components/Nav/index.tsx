"use client";

import { useSession } from "next-auth/react";
import SignInButton from "../SignInButton";
import SignOutButton from "../SignOutButton";
import styles from "./Nav.module.css";

export function Nav() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <input
          className={styles.search}
          type="text"
          placeholder="search event/users..."
        />
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          {session ? (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: "900",
                    fontSize: "0.75rem",
                  }}
                >
                  Welcome back
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "white",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    transition: "color 0.3s, background-color 0.3s",
                  }}
                >
                  {session.user.name}
                </p>
              </div>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
        <div className={styles.listItem}>Register</div>
      </div>
    </div>
  );
}
