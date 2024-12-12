import { Box } from "@mui/material";
import CustomButton from "../customButton/CustomButton";
import SelectFilter from "../selectFilter/SelectFilter";
import { customStyle } from "./appHeader.style";
import TodoModal from "../todoModal/TodoModal";
<<<<<<< HEAD
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
=======

function AppHeader() {
  return (
    <Box sx={customStyle.container}>
      <CustomButton title="Add Task" active={true} />
      <SelectFilter />
      <TodoModal />
>>>>>>> 3614df627b28156636ec815351fc9f73838d2679
    </Box>
  );
}

export default AppHeader;
