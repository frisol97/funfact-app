import React from "react";
import { NavbarItem } from "./NavbarItem";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <NavbarItem title="Hjem" link="/hjem" />
        <NavbarItem title="Funfact" link="/funfact" />
        <NavbarItem title="Family Feud" link="/familyfeud" />
      </div>
    </header>
  );
}
