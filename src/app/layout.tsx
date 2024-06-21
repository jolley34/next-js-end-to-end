import styles from "../styles/GlobalStyles.module.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "End to end",
  description: "An end to end application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${inter.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
