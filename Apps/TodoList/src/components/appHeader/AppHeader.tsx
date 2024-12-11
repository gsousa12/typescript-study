import { Box } from "@mui/material";
import CustomButton from "../customButton/CustomButton";
import SelectFilter from "../selectFilter/SelectFilter";
import { customStyle } from "./appHeader.style";
import TodoModal from "../todoModal/TodoModal";

function AppHeader() {
  return (
    <Box sx={customStyle.container}>
      <CustomButton title="Add Task" active={true} />
      <SelectFilter />
      <TodoModal />
    </Box>
  );
}

export default AppHeader;
