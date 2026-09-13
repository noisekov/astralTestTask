import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import { useAppSelector } from "../../hooks/redux";

const Page = () => {
  const INITIAL_PROFILE_NAME = "Войти";
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const login = useAppSelector((state) => state.auth.login);

  return (
    <>
      <Header name={login || INITIAL_PROFILE_NAME} isAuth={isAuthenticated} />
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
