import { useState } from "react";

import Todos from "./components/Todos";
import Todo from "./models/todo";
import "./App.css";
import NewTodo from "./components/NewTodo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
