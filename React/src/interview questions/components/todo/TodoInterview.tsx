import { useState } from "react";
import TodoContent from "../TodoContent";

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function TodoInterview() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [idValue, setIdValue] = useState<number>(0);
  const generateId = (): number => {
    const id = idValue + 1;
    setIdValue(idValue + 1);
    return id;
  };

  const addTodoItem = () => {
    const newTodo: TodoItem = {
      id: generateId(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setInputValue("");
  };

  const removeTodoItem = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoItem = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="todoInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button name="todoAddButton" onClick={addTodoItem}>
          Add
        </button>
      </div>
      <div>
        <TodoContent
          todos={todos}
          onRemove={removeTodoItem}
          toggleTodo={toggleTodoItem}
        />
      </div>
    </div>
  );
}

export default TodoInterview;
