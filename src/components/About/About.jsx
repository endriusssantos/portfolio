import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-50 flex min-h-screen flex-col items-center justify-center gap-7 px-10 text-center sm:mt-0">
      <motion.h2
        className="text-5xl font-bold md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        Quem sou <span className="text-purple-500">Eu</span>?
      </motion.h2>
      <p className="max-w-3xl text-center text-lg text-gray-400 md:text-xl">
        Sou Desenvolvedor Full-Stack formado, apaixonado por criar interfaces modernas,
        rápidas e intuitivas. Tenho experiência com{" "}
        <span className="text-purple-500">HTML</span>,{" "}
        <span className="text-purple-500">CSS</span>,{" "}
        <span className="text-purple-500">JavaScript</span>,{" "}
        <span className="text-purple-500">TypeScript</span>,{" "}
        <span className="text-purple-500">React</span>,{" "}
        <span className="text-purple-500">Redux</span>,{" "}
        <span className="text-purple-500">Jest</span> e{" "}
        <span className="text-purple-500">Tailwind CSS</span> no front-end e{" "}
        <span className="text-purple-500">Node.js</span>,{" "}
        <span className="text-purple-500">SQL</span>,{" "}
        <span className="text-purple-500">PostgreSQL</span>,{" "}
        <span className="text-purple-500">Prisma</span>,{" "}
        <span className="text-purple-500">Docker</span> e{" "}
        <span className="text-purple-500">Express</span> no back-end, sempre
        buscando escrever código limpo e construir experiências de usuário
        agradáveis. Atualmente estou focado em evoluir minhas habilidades,
        desenvolver projetos práticos e contribuir com soluções que gerem valor
        real.
      </p>
      <div className="grid grid-cols-1 items-center justify-center gap-5 border-t border-gray-700 pt-10 text-center md:grid-cols-2">
        <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 transition-colors duration-300 hover:bg-gray-800">
          <h3 className="text-2xl text-purple-500">💻 Desenvolvimento Web</h3>
          <p>Criação de interfaces modernas e responsivas.</p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 transition-colors duration-300 hover:bg-gray-800">
          <h3 className="text-2xl text-purple-500">⚡Performance</h3>
          <p>Foco em aplicações rápidas e bem estruturadas.</p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 transition-colors duration-300 hover:bg-gray-800">
          <h3 className="text-2xl text-purple-500">🎨 UI / UX</h3>
          <p>Experiência com design limpo e boa usabilidade.</p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 transition-colors duration-300 hover:bg-gray-800">
          <h3 className="text-2xl text-purple-500">🚀 Aprendizado contínuo</h3>
          <p>Sempre estudando novas tecnologias.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
