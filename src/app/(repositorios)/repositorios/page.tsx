"use client";

import { useState, useEffect } from "react";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}

export default function Repositorios() {
  const [repos, setRepos] = useState<DataProps[]>([]);

  // Simulação de atraso no carregamento da API no lado client
  useEffect(() => {
    function getData() {
      fetch("https://api.github.com/users/devfraga/repos")
        .then((response) => response.json())
        .then((data: DataProps[]) => {
          setTimeout(() => {
            setRepos(data);
          }, 1000);
        });
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Página repositórios</h1>

      <br />
      <br />

      {repos.map((item) => (
        <div key={item.id}>
          <strong>Repositório: </strong> <a>{item.name}</a>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
