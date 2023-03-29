import React from "react";
import "./style.css";

interface Props {
  children: any;
}

function FloatingAnimation({ children }: Props) {
  return <div className="react-floater-animated">{children}</div>;
}

export default FloatingAnimation;
