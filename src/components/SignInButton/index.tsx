"use client";

import { signIn } from "next-auth/react";
import styles from "./SignInButton.module.css";

export default function SignInButton() {
  return (
    <button
      data-cy="github-login"
      className={styles.button}
      onClick={() => signIn("github")}
    >
      Sign in with Github
    </button>
  );
}
