import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  link: string;
  title: string;
}

export function NavbarItem({ link, title }: Props) {
  return (
    <NavLink
      onClick={() => {}}
      activeClassName="navbar__item--current"
      className="navbar__item"
      to={link}
    >
      <h1 className="navbar__item__title">{title}</h1>
    </NavLink>
  );
}
