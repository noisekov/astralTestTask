import type { Words } from "../../services/wordsApi";
import { Card } from "../Card/Card";
import styles from "./CardList.module.css";

const CardList = ({ cardsData }: { cardsData: Words[] }) => {
  return (
    <div className={styles.wrapper}>
      {cardsData.map((card) => (
        <Card key={card.id} cardsData={card}></Card>
      ))}
    </div>
  );
};

export default CardList;
