import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { customStyle } from "./todoModal.style";
import { MdOutlineClose } from "react-icons/md";
import CustomButton from "../customButton/CustomButton";
import { TodoModalProps } from "../../utils/interfaces";
import { useState } from "react";
import { statusTypeEnum } from "../../utils/enums";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

function TodoModal({ ...props }: TodoModalProps) {
  const [taskName, setTaskName] = useState("");
  const [todoStatus, setTodoStatus] = useState<statusTypeEnum>(
    statusTypeEnum.incomplete
  );
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    props.setHandleModalOpen(false);
    setTaskName("");
    setTodoStatus(statusTypeEnum.incomplete);
  };

  const handleSummit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (taskName && todoStatus) {
      dispatch(
        addTodo({
          id: uuidv4(),
          taskName,
          todoStatus,
          time: new Date().toLocaleString(),
        })
      );
      toast.success("Task added successfully");
      setTaskName("");
    } else toast.error("Please fill the task name input");
  };

  return (
    props.handleModalOpen && (
      <Box sx={customStyle.wrapper}>
        <Box sx={customStyle.container}>
          <Box sx={customStyle.closeButton}>
            <MdOutlineClose onClick={handleCloseModal} />
          </Box>
          <FormControl sx={customStyle.form}>
            <Typography sx={customStyle.title} variant="h6">
              Add Task
            </Typography>
            <TextField
              title="Task Name"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <Select
              value={todoStatus}
              onChange={(e) => setTodoStatus(e.target.value as statusTypeEnum)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"incomplete"}>Incomplete</MenuItem>
              <MenuItem value={"complete"}>Complete</MenuItem>
            </Select>

            <Box sx={customStyle.buttonContainer}>
              <CustomButton
                type="submit"
                title="Add Task"
                active={true}
                onClick={(e) => handleSummit(e)}
              />
              <CustomButton
                onClick={handleCloseModal}
                type="button"
                title="Cancel"
                active={true}
              />
            </Box>
          </FormControl>
        </Box>
      </Box>
    )
  );
}

export default TodoModal;
