import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import { useAppSelector } from "../../store/hooks";
import { selectIsAuthenticated, selectLogin } from "../../store/selectors";

const Page = () => {
  const INITIAL_PROFILE_NAME = "Войти";
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const login = useAppSelector(selectLogin);

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
