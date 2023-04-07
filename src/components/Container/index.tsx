import React, { ReactNode } from "react";
import "./style.scss";

interface MyProps {
  children: ReactNode;
}

class Container extends React.Component<MyProps> {
  render() {
    const { children } = this.props;
    return <div className="container">{children}</div>;
  }
}

export default Container;
