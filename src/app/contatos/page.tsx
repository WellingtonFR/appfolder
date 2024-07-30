import Link from "next/link";

export default function Contatos() {
  return (
    <main>
      <div>
        <h1>Contatos</h1>
        <Link href={"/"}>
          <button>Home</button>
        </Link>
      </div>
    </main>
  );
}
