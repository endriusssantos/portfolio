import React from "react";

const Projects = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-7 px-10">
      <h2 className="text-5xl font-bold md:text-6xl">
        Principais <span className="text-purple-500">Projetos</span>
      </h2>
      <p className="max-w-3xl text-center text-lg text-gray-400 md:text-xl">
        Esses são alguns dos meus principais projetos:
      </p>
      <div className="grid grid-cols-1 items-center justify-center gap-6 text-center md:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-2xl bg-gray-900 p-4">
          <img src="../../src/assets/images/gametrack.png" alt="GameTrack" />
          <h3 className="text-xl font-bold">GameTrack</h3>
          <p className="text-gray-400">
            Gerencie e acompanhe seus jogos favoritos com o GameTrack, uma
            aplicação full-stack onde o usuário pode visualizar informações
            detalhadas sobre jogos (como data de lançamento, plataformas e
            notas), favoritar títulos, definir status personalizados e manter
            tudo sincronizado com sua conta.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="rounded-full bg-purple-500 px-3 py-1 text-sm font-bold text-white">
              React
            </span>
            <span className="rounded-full bg-blue-500 px-3 py-1 text-sm font-bold text-white">
              Node.js
            </span>
            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-white">
              PostgreSQL
            </span>
          </div>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Ver no GitHub
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
              Ver ao vivo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
