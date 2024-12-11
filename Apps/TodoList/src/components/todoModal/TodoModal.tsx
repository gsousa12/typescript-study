import { Box, Typography } from "@mui/material";
import { customStyle } from "./todoModal.style";
import { MdOutlineClose } from "react-icons/md";

function TodoModal() {
  return (
    <Box sx={customStyle.wrapper}>
      <Box sx={customStyle.container}>
        <Box sx={customStyle.closeButton}>
          <MdOutlineClose />
        </Box>
        <Typography variant="h6">MODAL</Typography>
      </Box>
    </Box>
  );
}

export default TodoModal;
