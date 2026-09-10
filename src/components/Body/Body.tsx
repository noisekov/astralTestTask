import { FC } from "react";
import styles from "./Body.module.css";
import { Outlet } from "react-router";

interface BodyProps {}

const Body: FC<BodyProps> = () => {
  return (
    <div className={styles.body}>
      <Outlet />
    </div>
  );
};

export default Body;
