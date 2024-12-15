import { Box } from "@mui/material";
import { customStyle } from "./appContent.style";
import { useSelector } from "react-redux";
import TodoItem from "../todoItem/TodoItem";

function AppContent() {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a: any, b: any): number => {
    return +new Date(a.date) - +new Date(b.date);
  });
  return (
    <Box sx={customStyle}>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        : "No todo list"}
    </Box>
  );
}

export default AppContent;
