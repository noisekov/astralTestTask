import React from "react";
import "./Header.css";
import { NavLink } from "react-router";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink className="header__link" to="/" end>
          Главная
        </NavLink>
        <NavLink className="header__link" to="/cards">
          Карточки
        </NavLink>
        <NavLink className="header__link" to="/profile">
          Профиль
        </NavLink>
      </nav>
      <span className="header__user">{name}</span>
    </header>
  );
};

export default Header;
