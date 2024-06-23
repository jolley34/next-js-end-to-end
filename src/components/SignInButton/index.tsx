"use client";

import { signIn } from "next-auth/react";
import styles from "./SignInButton.module.css";

export default function SignInButton() {
  return (
    <button className={styles.button} onClick={() => signIn("github")}>
      Sign in with Github
    </button>
  );
}
