import { FC } from "react";
import "./Body.css";
import { Outlet } from "react-router";

interface BodyProps {}

const Body: FC<BodyProps> = () => {
  return (
    <div className="body">
      <Outlet />
    </div>
  );
};

export default Body;
