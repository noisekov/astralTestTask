import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import { useAppSelector } from "../../hooks/redux";

const Page = () => {
  const { isAuthenticated, login } = useAppSelector((state) => state);

  return (
    <>
      <Header name={login || "Войти"} isAuth={isAuthenticated} />
      <Body />
      <Footer
        youtube="https://youtube.com/"
        twitter="https://twitter.com/"
        instagram="https://instagram.com/"
      />
    </>
  );
};

export default Page;
