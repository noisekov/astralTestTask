import CardList from "../../components/CardList/CardList";
import { WORDS } from "../../services/wordsApi";

export default function Cards() {
  return (
    <>
      <CardList cardsData={WORDS}></CardList>
    </>
  );
}
