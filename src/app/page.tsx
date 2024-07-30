import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Homepage</h1>
        <Link href={"/contatos"}>
          <button>Contatos</button>
        </Link>
      </div>
    </main>
  );
}
