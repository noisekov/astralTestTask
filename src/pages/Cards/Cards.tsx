import CardList from "../../components/CardList/CardList";
import { WORDS } from "../../services/wordsApi";

export const Cards = () => {
  return (
    <>
      <CardList cardsData={WORDS}></CardList>
    </>
  );
};
