import React from "react";
import { TodoItem } from "./todo/TodoInterview";

interface TodoContentProps {
  todos: TodoItem[];
  onRemove: (id: number) => void;
  toggleTodo: (id: number) => void;
}

function TodoContent({ todos, onRemove, toggleTodo }: TodoContentProps) {
  const textStyle = (completed: boolean): React.CSSProperties => {
    if (completed) {
      return { textDecoration: "line-through" };
    }

    return {};
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
          <p>{todo.id} - </p>
          <p style={textStyle(todo.completed)}>{todo.text}</p>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <button onClick={() => onRemove(todo.id)}>remove item</button>
        </div>
      ))}
    </div>
  );
}

export default TodoContent;
