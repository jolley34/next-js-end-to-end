"use client";

import { signIn } from "next-auth/react";
import styles from "./Button.module.css";

export default function SignInButton() {
  return (
    <button className={styles.button} onClick={() => signIn()}>
      Sign in with Github
    </button>
  );
}
