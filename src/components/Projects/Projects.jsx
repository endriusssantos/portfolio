import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "GameTrack",
      image: "../../src/assets/images/gametrack.png",
      description:
        "Gerencie e acompanhe seus jogos favoritos com o GameTrack, uma aplicação full-stack onde o usuário pode visualizar informações detalhadas sobre jogos (como data de lançamento, plataformas e notas), favoritar títulos, definir status personalizados e manter tudo sincronizado com sua conta.",
      technologies: [
        { name: "React", color: "bg-purple-500" },
        { name: "Node.js", color: "bg-red-500" },
        { name: "PostgreSQL", color: "bg-green-500" },
        { name: "API", color: "bg-orange-500" },
      ],
      githubLink: "https://github.com/endriusssantos/gametrack",
      liveLink: "https://gametrack-nine.vercel.app/",
    },
    {
      title: "ToDO App",
      image: "../../src/assets/images/todoapp.png",
      description:
        "Um aplicativo de lista de tarefas (ToDo List) construído com React, Tailwind CSS e Context API (para tema escuro/claro), com suporte a filtros, marcação de tarefa concluída e remoção de tarefas.",
      technologies: [
        { name: "React", color: "bg-purple-500" },
        { name: "Tailwind CSS", color: "bg-blue-500" },
        { name: "Context API", color: "bg-orange-500" },
      ],
      githubLink: "https://github.com/endriusssantos/todo-app-react",
      liveLink: "https://todo-app-react-umber-iota.vercel.app/",
    },
    {
      title: "MovieFlix API",
      image: "../../src/assets/images/movieflix.png",
      description:
        "API RESTful desenvolvida em TypeScript para gerenciamento de filmes e usuários. O projeto utiliza Prisma ORM para manipulação de banco de dados, é containerizado com Docker e documentado com Swagger.",
      technologies: [
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "Node.js", color: "bg-red-500" },
        { name: "Express", color: "bg-gray-500" },
        { name: "Prisma", color: "bg-indigo-500" },
        { name: "Docker", color: "bg-cyan-500" },
        { name: "Swagger", color: "bg-pink-500" },
      ],
      githubLink: "https://github.com/endriusssantos/movieflix-api",
      liveLink: null,
    },
    {
      title: "Loja Virtual Avanti",
      image: "../../src/assets/images/loja_virtual_avanti.png",
      description:
        "Este projeto tem como objetivo criar o layout de uma loja virtual com base em um modelo fornecido no Figma. A aplicação é desenvolvida com HTML, Tailwind CSS e utiliza JavaScript para funcionalidades interativas, como o carrossel de produtos e a navegação.",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "Tailwind CSS", color: "bg-blue-500" },
        { name: "JavaScript", color: "bg-yellow-500" },
      ],
      githubLink:
        "https://github.com/endriusssantos/loja-virtual-avanti-layout",
      liveLink: "https://endriusssantos.github.io/loja-virtual-avanti-layout/",
    },
    {
      title: "GitHub API",
      image: "../../src/assets/images/github_api.png",
      description:
        "Uma aplicação que consome a GitHub API para buscar dados de um usuário a partir de um nome de usuário digitado. O projeto foi criado com HTML, CSS e JavaScript puro, com foco em praticar requisições assíncronas com fetch, manipulação de DOM e tratamento de erros.",
      technologies: [
        { name: "HTML", color: "bg-orange-500" },
        { name: "CSS", color: "bg-teal-500" },
        { name: "JavaScript", color: "bg-yellow-500" },
      ],
      githubLink:
        "https://github.com/endriusssantos/projeto-mundo-real-com-fetch-e-github-api-main",
      liveLink:
        "https://endriusssantos.github.io/projeto-mundo-real-com-fetch-e-github-api-main/",
    },
    {
      title: "Pokédex",
      image: "../../src/assets/images/pokedex.png",
      description:
        "A Pokédex é uma aplicação web criada para exibir uma lista de Pokémon, com a possibilidade de visualizar detalhes específicos de cada um. O projeto foi desenvolvido com o objetivo de explorar tecnologias modernas para criar uma interface interativa e responsiva, simulando a experiência de uso de uma Pokédex no navegador.",
      technologies: [
        { name: "React", color: "bg-purple-500" },
        { name: "Styled Components", color: "bg-lime-500" },
        { name: "Context API", color: "bg-orange-500" },
        { name: "React Router DOM", color: "bg-violet-500" },
      ],
      githubLink: "https://github.com/endriusssantos/projeto-pokedex",
      liveLink: "https://projeto-pokedex-react-avancado.vercel.app/",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-7 px-10">
      <h2 className="text-5xl font-bold md:text-6xl">
        Principais <span className="text-purple-500">Projetos</span>
      </h2>
      <p className="max-w-3xl text-center text-lg text-gray-400 md:text-xl">
        Esses são alguns dos meus principais projetos:
      </p>
      <div className="grid grid-cols-1 items-center justify-center gap-6 text-center md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
