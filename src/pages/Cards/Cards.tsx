import CardList from "../../components/CardList/CardList";
import { WORDS } from "../../services/wordsApi";

const Cards = () => {
  return (
    <>
      <CardList cardsData={WORDS}></CardList>
    </>
  );
};

export default Cards;
