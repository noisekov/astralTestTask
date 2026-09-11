import styles from "./Header.module.css";
import { NavLink } from "react-router";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <NavLink className={styles.header__link} to="/" end>
          Главная
        </NavLink>
        <NavLink className={styles.header__link} to="/cards">
          Карточки
        </NavLink>
        <NavLink className={styles.header__link} to="/profile">
          Профиль
        </NavLink>
      </nav>
      <span className={styles.header__user}>{name}</span>
    </header>
  );
};

export default Header;
