import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between pt-7">
      <h1 className="text-2xl font-bold">{"< Endrius >"}</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a
              href="#home"
              className="group relative transition-all duration-300 hover:text-purple-500"
            >
              Início
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
