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
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
              Node.js
            </span>
            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-white">
              PostgreSQL
            </span>
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
              API
            </span>
          </div>
          <div className="my-2 flex items-center justify-center gap-3">
            <a
              href="https://github.com/endriusssantos/gametrack"
              target="_blank"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Ver no GitHub
            </a>
            <a
              href="https://gametrack-nine.vercel.app/"
              target="_blank"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-green-700"
            >
              Ver Ao Vivo
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-gray-900 p-4">
          <img src="../../src/assets/images/todoapp.png" alt="ToDo App" />
          <h3 className="text-xl font-bold">ToDO App</h3>
          <p className="text-gray-400">
            Um aplicativo de lista de tarefas (ToDo List) construído com React,
            Tailwind CSS e Context API (para tema escuro/claro), com suporte a
            filtros, marcação de tarefa concluída e remoção de tarefas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-purple-500 px-3 py-1 text-sm font-bold text-white">
              React
            </span>
            <span className="rounded-full bg-blue-500 px-3 py-1 text-sm font-bold text-white">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
              Context API
            </span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-3 pb-2">
            <a
              href="https://github.com/endriusssantos/todo-app-react"
              target="_blank"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Ver no GitHub
            </a>
            <a
              href="https://todo-app-react-umber-iota.vercel.app/"
              target="_blank"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-green-700"
            >
              Ver Ao Vivo
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-gray-900 p-4">
          <img
            src="../../src/assets/images/movieflix.png"
            alt="MovieFlix API"
          />
          <h3 className="text-xl font-bold">MovieFlix API</h3>
          <p className="text-gray-400">
            API RESTful desenvolvida em TypeScript para gerenciamento de filmes
            e usuários. O projeto utiliza Prisma ORM para manipulação de banco
            de dados, é containerizado com Docker e documentado com Swagger.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-bold text-white">
              TypeScript
            </span>
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
              Node.js
            </span>
            <span className="rounded-full bg-gray-500 px-3 py-1 text-sm font-bold text-white">
              Express
            </span>
            <span className="rounded-full bg-indigo-500 px-3 py-1 text-sm font-bold text-white">
              Prisma
            </span>
            <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-bold text-white">
              Docker
            </span>
            <span className="rounded-full bg-pink-500 px-3 py-1 text-sm font-bold text-white">
              Swagger
            </span>
          </div>
          <div className="my-2 flex items-center justify-center gap-3">
            <a
              href="https://github.com/endriusssantos/movieflix-api"
              target="_blank"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Ver no GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-gray-900 p-4">
          <img
            src="../../src/assets/images/loja_virtual_avanti.png"
            alt="Loja Virtual Avanti"
          />
          <h3 className="text-xl font-bold">Loja Virtual Avanti</h3>
          <p className="text-gray-400">
            Este projeto tem como objetivo criar o layout de uma loja virtual
            com base em um modelo fornecido no Figma. A aplicação é desenvolvida
            com HTML, Tailwind CSS e utiliza JavaScript para funcionalidades
            interativas, como o carrossel de produtos e a navegação.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
              HTML
            </span>
            <span className="rounded-full bg-blue-500 px-3 py-1 text-sm font-bold text-white">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-white">
              JavaScript
            </span>
          </div>
          <div className="my-2 flex items-center justify-center gap-3">
            <a
              href="https://github.com/endriusssantos/loja-virtual-avanti-layout"
              target="_blank"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Ver no GitHub
            </a>
            <a
              href="https://endriusssantos.github.io/loja-virtual-avanti-layout/"
              target="_blank"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-green-700"
            >
              Ver Ao Vivo
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-gray-900 p-4">
          <img src="../../src/assets/images/github_api.png" alt="GitHub API" />
          <h3 className="text-xl font-bold">GitHub API</h3>
          <p className="text-gray-400">
            Uma aplicação que consome a GitHub API para buscar dados de um
            usuário a partir de um nome de usuário digitado. O projeto foi
            criado com HTML, CSS e JavaScript puro, com foco em praticar
            requisições assíncronas com fetch, manipulação de DOM e tratamento
            de erros.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
              HTML
            </span>
            <span className="rounded-full bg-teal-500 px-3 py-1 text-sm font-bold text-white">
              CSS
            </span>
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-white">
              JavaScript
            </span>
          </div>
          <div className="my-2 flex items-center justify-center gap-3">
            <a
              href="https://github.com/endriusssantos/projeto-mundo-real-com-fetch-e-github-api-main"
              target="_blank"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Ver no GitHub
            </a>
            <a
              href="https://endriusssantos.github.io/projeto-mundo-real-com-fetch-e-github-api-main/"
              target="_blank"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-green-700"
            >
              Ver Ao Vivo
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-gray-900 p-4">
          <img src="../../src/assets/images/pokedex.png" alt="Pokedex" />
          <h3 className="text-xl font-bold">Pokédex</h3>
          <p className="text-gray-400">
            A Pokédex é uma aplicação web criada para exibir uma lista de
            Pokémon, com a possibilidade de visualizar detalhes específicos de
            cada um. O projeto foi desenvolvido com o objetivo de explorar
            tecnologias modernas para criar uma interface interativa e
            responsiva, simulando a experiência de uso de uma Pokédex no
            navegador.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-purple-500 px-3 py-1 text-sm font-bold text-white">
              React
            </span>
            <span className="rounded-full bg-lime-500 px-3 py-1 text-sm font-bold text-white">
              Styled Components
            </span>
            <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
              Context API
            </span>
            <span className="rounded-full bg-violet-500 px-3 py-1 text-sm font-bold text-white">
              React Router DOM
            </span>
          </div>
          <div className="my-2 flex items-center justify-center gap-3">
            <a
              href="https://github.com/endriusssantos/projeto-pokedex"
              target="_blank"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              Ver no GitHub
            </a>
            <a
              href="https://projeto-pokedex-react-avancado.vercel.app/"
              target="_blank"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-green-700"
            >
              Ver Ao Vivo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
