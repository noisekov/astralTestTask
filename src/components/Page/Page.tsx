import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/storeTypes";

const Page = () => {
  const { isAuthenticated, login } = useSelector((state: RootState) => state);

  return (
    <>
      <Header name={login || "Войти"} isAuth={isAuthenticated} />
      <Body />
      <Footer contacts={["first", "second"]} />
    </>
  );
};

export default Page;
