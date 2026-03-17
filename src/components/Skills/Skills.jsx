import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiJest,
  SiPrisma,
  SiExpress,
  SiTailwindcss,
  SiAxios,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SkillIcon = ({ icon: Icon, name, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-900 text-4xl text-purple-500 transition-all duration-200 hover:bg-gray-800 hover:shadow-lg">
        <Icon />
      </div>

      {isHovered && (
        <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded-lg border border-purple-500/30 bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-lg">
          <p className="whitespace-nowrap">{name}</p>
          <p className="text-xs whitespace-normal text-gray-300">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const technologiesData = useMemo(
    () => ({
      frontend: [
        {
          name: "React",
          description:
            "Utilizado para criação de interfaces componentizadas e SPAs",
          icon: FaReact,
        },
        {
          name: "TypeScript",
          description: "Tipagem estática para código mais robusto e seguro",
          icon: SiTypescript,
        },
        {
          name: "JavaScript",
          description: "Linguagem base para desenvolvimento web",
          icon: SiJavascript,
        },
        {
          name: "HTML5",
          description: "Estruturação semântica e marcação de conteúdo",
          icon: FaHtml5,
        },
        {
          name: "CSS3",
          description: "Estilização e design responsivo",
          icon: FaCss3Alt,
        },
        {
          name: "Redux",
          description: "Gerenciamento centralizado de estado",
          icon: SiRedux,
        },
        {
          name: "Jest",
          description: "Framework para testes unitários e integração",
          icon: SiJest,
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS para desenvolvimento rápido",
          icon: SiTailwindcss,
        },
        {
          name: "Axios",
          description: "Cliente HTTP para requisições de API",
          icon: SiAxios,
        },
      ],
      backend: [
        {
          name: "Node.js",
          description: "Runtime JavaScript para backend",
          icon: FaNodeJs,
        },
        {
          name: "PostgreSQL",
          description: "Banco de dados relacional robusto",
          icon: BiLogoPostgresql,
        },
        {
          name: "Prisma",
          description: "ORM moderno para gerenciamento de dados",
          icon: SiPrisma,
        },
        {
          name: "Docker",
          description: "Containerização e deploy de aplicações",
          icon: FaDocker,
        },
        {
          name: "Express",
          description: "Framework web minimalista para Node.js",
          icon: SiExpress,
        },
      ],
      others: [
        {
          name: "Git",
          description: "Controle de versão e versionamento de código",
          icon: FaGitAlt,
        },
        {
          name: "Figma",
          description: "Design UI/UX e prototipagem",
          icon: FaFigma,
        },
        {
          name: "VS Code",
          description: "Editor de código e desenvolvimento",
          icon: VscVscode,
        },
        {
          name: "Clean Code",
          description:
            "Um conjunto de princípios e melhores práticas para escrever código que seja fácil de ler, entender e manter",
          icon: MdCleaningServices,
        },
      ],
    }),
    [],
  );

  const tabs = useMemo(
    () => [
      { id: "frontend", label: "Front-End" },
      { id: "backend", label: "Back-End" },
      { id: "others", label: "Outros" },
    ],
    [],
  );

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = useMemo(() => {
    const contentByTab = {
      frontend: (
        <div className="flex flex-wrap items-center justify-center gap-6">
          {technologiesData.frontend.map((tech) => (
            <SkillIcon
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>
      ),
      backend: (
        <div className="flex flex-wrap items-center justify-center gap-6">
          {technologiesData.backend.map((tech) => (
            <SkillIcon
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>
      ),
      others: (
        <div className="flex flex-wrap items-center justify-center gap-6">
          {technologiesData.others.map((tech) => (
            <SkillIcon
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
            />
          ))}
        </div>
      ),
    };

    return contentByTab[activeTab] ?? null;
  }, [activeTab, technologiesData]);

  return (
    <div className="mx-7 flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <motion.h2
        className="border-b border-gray-700 pb-6 text-5xl font-bold md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-purple-500">Habilidades</span> e Tecnologias
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer rounded-2xl px-7 py-3 font-semibold transition-colors duration-200 focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                isActive
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-900 text-gray-200 hover:bg-gray-800"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">
        {activeContent}
      </div>
    </div>
  );
};

export default Skills;
