import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  BookOpenIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import CountUp from "react-countup";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Desenvolvedor Full-Stack",
        "Especialista em React",
        "Criador de Interfaces Modernas",
        "Transformando ideias em aplicações web",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center border-b border-gray-700 px-6 py-10 text-center text-5xl">
        <h2 className="text-5xl font-bold md:text-6xl">
          Olá, eu sou o <span className="text-purple-500">Endrius</span>!
        </h2>
        <p className="text-2xl text-purple-500 md:text-3xl">
          <span ref={typedRef}></span>
        </p>
        <p className="max-w-3xl pt-7 text-lg text-gray-400 md:text-xl">
          Desenvolvedor Full-Stack focado em criar aplicações web modernas,
          performáticas e com ótima experiência para o usuário.
        </p>
      </div>
      <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-5 px-6 sm:grid-cols-3">
        <div className="flex h-28 flex-col items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 px-4 text-center transition-colors duration-300 hover:bg-gray-800 sm:h-32">
          <div className="mt-2 flex items-center justify-center gap-2 text-xl font-bold">
            <BookOpenIcon className="size-8 text-purple-500" />
            <p>Estudando</p>
          </div>
          <p className="text-4xl font-bold">
            <CountUp end={3} duration={2} />
            <span className="text-purple-500"> anos</span>
          </p>
        </div>
        <div className="flex h-28 flex-col items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 px-4 text-center transition-colors duration-300 hover:bg-gray-800 sm:h-32">
          <div className="mt-2 flex items-center justify-center gap-2 text-xl font-bold">
            <CodeBracketIcon className="size-8 text-purple-500" />
            <p>Tecnologias</p>
          </div>
          <p className="text-4xl font-bold">
            <CountUp end={15} duration={2} />
            <span className="text-purple-500">+</span>
          </p>
        </div>
        <div className="flex h-28 flex-col items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 px-4 text-center transition-colors duration-300 hover:bg-gray-800 sm:h-32">
          <div className="mt-2 flex items-center justify-center gap-2 text-xl font-bold">
            <ComputerDesktopIcon className="size-8 text-purple-500" />
            <p>Projetos</p>
          </div>
          <p className="text-4xl font-bold">
            <CountUp end={50} duration={2} />
            <span className="text-purple-500">+</span>
          </p>
        </div>
        <div className="col-span-full mt-5 flex justify-center">
          <a
            href="/cv-endrius.pdf"
            download
            className="rounded-2xl border-2 border-purple-400 bg-purple-500 px-6 py-3 text-base font-extrabold text-white shadow-lg transition-colors duration-300 hover:border-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 focus:outline-none"
          >
            Baixar CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
