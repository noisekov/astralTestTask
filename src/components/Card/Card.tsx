import { memo, useState } from "react";
import styles from "./Card.module.css";
import { TITLES, type Words } from "../../services/wordsApi";
import { getRandomTitle } from "../../utils/getRandomTitle";
import Button from "../Button/Button";

const Card = memo(({ cardsData }: { cardsData: Words }) => {
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

            <Button
              className={styles.card__button}
              type="button"
              onClick={() => setIsFlipped(true)}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className={`${styles.card__face} ${styles.card__back}`}>
          <div className={styles.card__body}>
            <h2 className={styles.card__word}>{cardsData.translation}</h2>
            <Button
              className={styles.card__button}
              type="button"
              onClick={() => setIsFlipped(false)}
            >
              Show Less
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
});

export default Card;
