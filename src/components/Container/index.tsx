import { ReactNode } from "react";
import "./style.scss";

interface MyProps {
  children: ReactNode;
}

const Container = ({ children }: MyProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
