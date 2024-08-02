"use client";

import Link from "next/link";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  });

  return (
    <div>
      <h2>Algo deu errado por aqui</h2>
      <div>
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
    </div>
  );
};

export default Error;
