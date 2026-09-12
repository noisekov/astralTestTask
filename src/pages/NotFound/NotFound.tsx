import { Link } from "react-router";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <h1 className={styles.notFound__title}>404</h1>
      <p className={styles.notFound__text}>Страница не найдена</p>

      <Link className={styles.notFound__btn} to="/">
        Вернуться на главную
      </Link>
    </main>
  );
};

export default NotFound;
