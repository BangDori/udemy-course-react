import React, { useCallback, useMemo, useState } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";
import DemoList from "./components/Demo/DemoList";

const App = () => {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
};

export default App;
