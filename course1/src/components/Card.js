import React from "react";
import cn from "classnames";
import "./Card.css";

const Card = ({ children, className }) => {
  return <div className={cn("card", className)}>{children}</div>;
};

export default Card;
