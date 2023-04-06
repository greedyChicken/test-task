import { ReactNode } from "react";

interface MyProps {
  children: ReactNode;
}

const Container = ({ children }: MyProps) => {
  return <div>{children}</div>;
};

export default Container;
