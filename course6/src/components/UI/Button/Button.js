import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// Button을 React.memo로 최적화 해도 컴포넌트가 재 실행되는 이유는?
// App.js에서 전달하는 toogleParagraphHandler 함수가 매번 재 생성 되기 때문
export default React.memo(Button);
