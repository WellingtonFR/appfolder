import Link from "next/link";
import styles from "@/components/header/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <p>&gt; AppFolder</p>
        <Link href={"/"} className={styles.navLink}>
          Home
        </Link>
        <Link href={"/repositorios"} className={styles.navLink}>
          Repositórios
        </Link>
        <Link href={"/contatos"} className={styles.navLink}>
          Contatos
        </Link>
      </div>
    </header>
  );
}
