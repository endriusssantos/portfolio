import React from "react";
import NavItem from "../NavItem/NavItem";

const Header = () => {
  return (
    <div className="flex justify-between pt-7">
      <h1 className="text-2xl font-bold">{"< Endrius >"}</h1>
      <nav>
        <ul className="flex gap-6">
          <NavItem href="#home">Início</NavItem>
          <NavItem href="#about">Sobre</NavItem>
          <NavItem href="#skills">Habilidades</NavItem>
          <NavItem href="#projects">Projetos</NavItem>
          <NavItem href="#contact">Contato</NavItem>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
