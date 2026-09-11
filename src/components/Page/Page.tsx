import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";

const Page = () => {
  return (
    <>
      <Header name="name" />
      <Body />
      <Footer contacts={["first", "second"]} />
    </>
  );
};

export default Page;
