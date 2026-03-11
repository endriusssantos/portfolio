import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import NavItemMobile from "../NavItemMobile/NavItemMobile";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex w-full justify-between border-b border-gray-700 bg-slate-950/90 px-10 pt-7 pb-4 backdrop-blur-md lg:px-20">
        <h1 className="text-2xl font-bold">{"< Endrius >"}</h1>

        <button
          className="absolute top-7 right-9 flex flex-col gap-1.5 md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-label="Abrir menu"
        >
          <span className="h-0.5 w-6 bg-current"></span>
          <span className="h-0.5 w-6 bg-current"></span>
          <span className="h-0.5 w-6 bg-current"></span>
        </button>

        <nav>
          <ul className="hidden gap-6 md:flex">
            <NavItem href="#home">Início</NavItem>
            <NavItem href="#about">Sobre</NavItem>
            <NavItem href="#skills">Habilidades</NavItem>
            <NavItem href="#projects">Projetos</NavItem>
            <NavItem href="#contact">Contato</NavItem>
          </ul>
        </nav>
      </header>

      <div
        className={`bg-opacity-90 fixed inset-0 z-50 flex transform flex-col items-center justify-center bg-black transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={toggleMenu}
      >
        <button
          className="absolute top-7 right-9 text-5xl text-white"
          aria-label="Fechar menu"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          &times;
        </button>

        <ul className="flex flex-col gap-8 text-2xl text-white">
          <NavItemMobile href="#home" toggleMenu={toggleMenu}>
            Início
          </NavItemMobile>
          <NavItemMobile href="#about" toggleMenu={toggleMenu}>
            Sobre
          </NavItemMobile>
          <NavItemMobile href="#skills" toggleMenu={toggleMenu}>
            Habilidades
          </NavItemMobile>
          <NavItemMobile href="#projects" toggleMenu={toggleMenu}>
            Projetos
          </NavItemMobile>
          <NavItemMobile href="#contact" toggleMenu={toggleMenu}>
            Contato
          </NavItemMobile>
        </ul>
      </div>
    </>
  );
};

export default Header;
