import React, { useMemo, useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiRedux, SiJest } from "react-icons/si";

const Skills = () => {
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
        <div className="flex items-center justify-center gap-3 text-4xl text-purple-500">
          <FaReact />
          <SiTypescript />
          <SiJavascript />
          <FaHtml5 />
          <FaCss3Alt />
          <SiRedux />
          <SiJest />
        </div>
      ),
      backend: (
        <div className="flex flex-col items-center gap-3">
          <ul className="list-disc text-left text-sm text-gray-200">
            <li>Node.js</li>
            <li>Express</li>
            <li>REST / GraphQL</li>
          </ul>
        </div>
      ),
      others: (
        <div className="flex flex-col items-center gap-3">
          <ul className="list-disc text-left text-sm text-gray-200">
            <li>Git</li>
            <li>TypeScript</li>
            <li>Testes</li>
          </ul>
        </div>
      ),
    };

    return contentByTab[activeTab] ?? null;
  }, [activeTab]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <h2 className="text-5xl font-bold md:text-6xl">
        <span className="text-purple-500">Habilidades</span> e Tecnologias
      </h2>

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
