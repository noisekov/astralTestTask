import styles from "./Header.module.css";
import { NavLink } from "react-router";

interface HeaderProps {
  name: string;
  isAuth: boolean;
}

const Header = ({ name, isAuth }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <NavLink className={styles.header__link} to="/" end>
          Главная
        </NavLink>
        {isAuth && (
          <NavLink className={styles.header__link} to="/cards">
            Карточки
          </NavLink>
        )}
      </nav>
      <NavLink
        className={`${styles.header__link} ${styles.header__user}`}
        to={isAuth ? "/profile" : "/login"}
      >
        {name}
      </NavLink>
    </header>
  );
};

export default Header;
