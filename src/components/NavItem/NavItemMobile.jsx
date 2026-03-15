import React from "react";

const NavItemMobile = ({ href, children, toggleMenu }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  return (
    <li>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

export default NavItemMobile;
