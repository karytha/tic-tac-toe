"use client";

import styles from "./page.module.css";
import Table from "@/components/table/table";

export default function Home() {
  return (
    <div className={styles.page}>
      <Table />
    </div>
  );
}
