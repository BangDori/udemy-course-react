import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = ({ show }) => {
  console.log("DemoOutput RUNNING");

  return <MyParagraph>{show ? "This is new!" : ""}</MyParagraph>;
};

// props의 값이 변경되지 않았다면, 컴포넌트를 재실행 하지 않음
export default React.memo(DemoOutput);
