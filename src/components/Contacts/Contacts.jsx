import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-10 py-20 text-center">
      <motion.h2
        className="text-5xl font-bold md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        Entre em <span className="text-purple-500">Contato</span>
      </motion.h2>
      <p className="max-w-3xl text-center text-lg text-gray-400 md:text-xl">
        Vamos conversar! Estou disponível para oportunidades de trabalho,
        colaborações ou apenas para bater um papo sobre tecnologia.
      </p>
      <div className="grid grid-cols-1 gap-6 border-t border-gray-700 p-7 md:grid-cols-2 lg:grid-cols-4">
        <a
          href="mailto:endriussilvasantos@gmail.com"
          className="flex flex-col items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center transition-colors duration-300 hover:border-purple-500 hover:bg-gray-800"
        >
          <EnvelopeIcon className="mb-4 size-12 text-purple-500" />
          <h3 className="text-xl font-bold">Email</h3>
          <p className="text-gray-400">endriussilvasantos@gmail.com</p>
        </a>
        <a
          href="https://github.com/endriusssantos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center transition-colors duration-300 hover:border-purple-500 hover:bg-gray-800"
        >
          <FaGithub className="mb-4 size-12 text-purple-500" />
          <h3 className="text-xl font-bold">GitHub</h3>
          <p className="text-gray-400">@endriusssantos</p>
        </a>
        <a
          href="https://www.linkedin.com/in/endrius-da-silva-dos-santos-8a7113328/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center transition-colors duration-300 hover:border-purple-500 hover:bg-gray-800"
        >
          <FaLinkedin className="mb-4 size-12 text-purple-500" />
          <h3 className="text-xl font-bold">LinkedIn</h3>
          <p className="text-gray-400">Endrius da Silva dos Santos</p>
        </a>
        <a
          href="/cv-endrius.pdf"
          download
          className="flex flex-col items-center justify-center rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center transition-colors duration-300 hover:border-purple-500 hover:bg-gray-800"
        >
          <DocumentArrowDownIcon className="mb-4 size-12 text-purple-500" />
          <h3 className="text-xl font-bold">Currículo</h3>
          <p className="text-gray-400">Download PDF</p>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
