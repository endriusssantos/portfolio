import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-slate-950 px-10 py-10 text-center">
      <div className="flex flex-col items-center gap-6">
        <p className="text-lg text-gray-400">
          © 2026 Endrius da Silva dos Santos. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:endriussilvasantos@gmail.com"
            className="text-gray-400 transition-colors duration-300 hover:text-purple-500"
            aria-label="Email"
          >
            <EnvelopeIcon className="size-6" />
          </a>
          <a
            href="https://github.com/endriusssantos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-purple-500"
            aria-label="GitHub"
          >
            <FaGithub className="size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/endrius-da-silva-dos-santos-8a7113328/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-purple-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="size-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
