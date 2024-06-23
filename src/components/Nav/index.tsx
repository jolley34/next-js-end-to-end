"use client";
import { auth } from "@/auth";
import { signOutUser } from "@/src/actions/Users";
import SignInButton from "../SignInButton";
import styles from "./Nav.module.css";

export async function Nav() {
  const session = await auth();
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <input
            className={styles.search}
            type="text"
            placeholder="search event/users..."
          ></input>
          <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
            {session?.user ? (
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
              </>
            ) : (
              <SignInButton />
            )}
          </div>
          {session?.user && (
            <form action={signOutUser}>
              <button
                style={{
                  cursor: "pointer",
                  background: "#0072e4",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  color: "white",
                }}
              >
                Sign out
              </button>
            </form>
          )}
          <div className={styles.listItem}>Register</div>
        </div>
      </div>
    </>
  );
}
