"use client";
import styles from "./Button.module.css";

export function Button({
  title,
  children,
  onClick,
}: {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={styles.button}
      title={title}
      onClick={onClick}
    >
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
}
