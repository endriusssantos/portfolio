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
    <div
      className="flex h-full min-h-130 flex-col gap-3 rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-lg"
      style={{ boxSizing: "border-box" }}
    >
      <img
        src={image}
        alt={title}
        className="mb-2 h-65 w-full rounded-xl object-cover"
      />
      <h3 className="flex-0 text-xl font-bold">{title}</h3>
      <p
        className="flex-1 overflow-auto text-ellipsis text-gray-400"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </p>
      <div className="mb-4 flex flex-0 flex-wrap items-center justify-center gap-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${tech.color}`}
            style={{
              opacity: 0.7,
              filter: "brightness(0.85) saturate(0.7)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>
      <div className="mt-2 flex flex-0 flex-wrap items-center justify-center gap-4">
        <a
          href={githubLink}
          target="_blank"
          className="rounded-full border-2 border-blue-400 bg-blue-500 px-5 py-2 text-base font-bold text-white shadow-lg transition-colors duration-300 hover:border-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 focus:outline-none"
        >
          Ver no GitHub
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            className="rounded-full border-2 border-green-400 bg-green-500 px-5 py-2 text-base font-bold text-white shadow-lg transition-colors duration-300 hover:border-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-300 focus:outline-none"
          >
            Ver Ao Vivo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
