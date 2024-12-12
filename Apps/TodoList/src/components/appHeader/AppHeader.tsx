import { Box } from "@mui/material";
import CustomButton from "../customButton/CustomButton";
import SelectFilter from "../selectFilter/SelectFilter";
import { customStyle } from "./appHeader.style";
import TodoModal from "../todoModal/TodoModal";
import { useState } from "react";

function AppHeader() {
  const [handleModalOpen, setHandleModalOpen] = useState(false);
  return (
    <Box sx={customStyle.container}>
      <CustomButton
        onClick={() => setHandleModalOpen(true)}
        title="Add Task"
        active={true}
      />
      <SelectFilter />
      <TodoModal
        handleModalOpen={handleModalOpen}
        setHandleModalOpen={setHandleModalOpen}
      />
    </Box>
  );
}

export default AppHeader;
