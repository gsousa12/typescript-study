import { Box } from "@mui/material";
import { customStyle } from "./todoItem.style";
import { MdDelete, MdEdit } from "react-icons/md";

function TodoItem({ todo }: any) {
  const handleDelete = () => {
    console.log("Delete todo", todo);
  };
  const handleUpdate = () => {
    console.log("Edit todo", todo);
  };
  return (
    <Box sx={customStyle.item}>
      <Box sx={customStyle.todoDetails}>
        {"[  ]"}
        {todo.todoStatus === "complete" ? (
          <Box sx={customStyle.texts}>
            <Box sx={customStyle.todoComplete}>{todo.taskName}</Box>
            <Box sx={customStyle.time}>{todo.time}</Box>
          </Box>
        ) : (
          <Box>
            <Box sx={customStyle.todoIncomplete}>{todo.taskName}</Box>
            <Box sx={customStyle.time}>{todo.time}</Box>
          </Box>
        )}
      </Box>
      <Box sx={customStyle.actions}>
        <Box sx={customStyle.icons}>
          <MdDelete onClick={handleDelete} />
        </Box>
        <Box sx={customStyle.icons}>
          <MdEdit onClick={handleUpdate} />
        </Box>
      </Box>
    </Box>
  );
}

export default TodoItem;
