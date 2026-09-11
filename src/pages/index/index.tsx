import styles from "./index.module.css";

const Index = () => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>WordFlow</h1>
        <p className={styles.subtitle}>Учим английские слова легко!</p>
        <p className={styles.description}>
          WordFlow — это SPA-приложение для изучения иностранных слов по методу
          карточек. Переворачивайте карточки, запоминайте слова и отслеживайте
          свой прогресс.
        </p>
      </section>

      <section className={styles.features}>
        <h2>Возможности приложения</h2>
        <ul className={styles.features__list}>
          {[
            "Интерактивные карточки со словами",
            "Персональный профиль пользователя",
            "Простая и удобная авторизация",
          ].map((feature) => (
            <li className={styles.features__item} key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Index;
