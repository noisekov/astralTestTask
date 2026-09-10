import { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <>
      <Header name="name" />
      <Body />
      <Footer contacts={["first", "second"]} />
    </>
  );
};

export default Page;
