import React from "react";

const NavItem = ({ href, children }) => {
  return (
    <li className="group">
      <a
        href={href}
        className="relative transition-all duration-300 group-hover:text-purple-500"
      >
        {children}
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
};

export default NavItem;
