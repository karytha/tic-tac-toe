"use client";

import styles from "./page.module.css";
import Table from "@/components/table/table";
import Menu from "@/components/menu/menu";

export default function Home() {
  return (
    <div className={styles.page} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
      <Table />
      <Menu />
    </div>
  );
}
