import { useState } from "react";
import styles from "./Card.module.css";
import { TITLES, type Words } from "../../services/wordsApi";

function getRandomTitle(list: string[]) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

export default function Card({ cardsData }: { cardsData: Words }) {
  const [title] = useState(() => getRandomTitle(TITLES));
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.scene}>
      <article
        className={`${styles.card} ${isFlipped ? styles.card__flipped : ""}`}
      >
        <div className={styles.card__face}>
          <div className={styles.card__header}>{title}</div>

          <div className={styles.card__body}>
            <h2 className={styles.card__word}>{cardsData.word}</h2>

            <p className={styles.card__example}>« {cardsData.example} »</p>

            <button
              className={styles.card__button}
              type="button"
              onClick={() => setIsFlipped(true)}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className={`${styles.card__face} ${styles.card__back}`}>
          <div className={styles.card__body}>
            <h2 className={styles.card__word}>{cardsData.translation}</h2>
            <button
              className={styles.card__button}
              type="button"
              onClick={() => setIsFlipped(false)}
            >
              Show Less
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
