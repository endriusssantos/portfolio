import React from "react";

const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-gray-900 p-4">
      <img src={image} alt={title} />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`rounded-full px-3 py-1 text-sm font-bold text-white ${tech.color}`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      <div className="my-2 flex items-center justify-center gap-3 flex-wrap">
        <a
          href={githubLink}
          target="_blank"
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700"
        >
          Ver no GitHub
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-green-700"
          >
            Ver Ao Vivo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
