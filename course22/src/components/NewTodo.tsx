import { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const eneteredText = todoTextInputRef.current!.value; // Not Null, 100% String

    if (eneteredText.trim().length === 0) {
      // throw an error
      return;
    }

    onAddTodo(eneteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
