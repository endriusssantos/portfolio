import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

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
    <div className="flex flex-col items-center px-6 text-center text-5xl">
      <h2 className="text-5xl font-bold md:text-6xl">
        Olá, eu sou o <span className="text-purple-500">Endrius</span>!
      </h2>
      <p className="text-2xl text-purple-500 md:text-3xl">
        <span ref={typedRef}></span>
      </p>
      <p className="pt-7 text-lg text-gray-400 md:text-xl max-w-3xl">
        Desenvolvedor Full-Stack focado em criar aplicações web modernas,
        performáticas e com ótima experiência para o usuário.
      </p>
    </div>
  );
};

export default Home;
