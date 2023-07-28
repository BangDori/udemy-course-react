import TodoItem from "./TodoItem";
import Todo from "../models/todo";

import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
