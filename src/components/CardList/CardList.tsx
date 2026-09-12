import type { Words } from "../../services/wordsApi";
import Cards from "../Card/Card";
import styles from "./CardList.module.css";

const CardList = ({ cardsData }: { cardsData: Words[] }) => {
  return (
    <div className={styles.wrapper}>
      {cardsData.map((card) => (
        <Cards key={card.id} cardsData={card}></Cards>
      ))}
    </div>
  );
};

export default CardList;
