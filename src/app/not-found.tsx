import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <p>Parece que essa página não existe</p>
      <button
        style={{
          padding: "10px",
          borderRadius: "30px",
          marginTop: "30px",
          textDecoration: "none",
          border: "none",
        }}
      >
        <Link href="/">&lt; Voltar para a página home</Link>
      </button>
    </div>
  );
}
