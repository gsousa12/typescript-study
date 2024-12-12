import { Box, Typography } from "@mui/material";
import { customStyle } from "./pageHeader.style";

function MainPage() {
  return (
    <Box sx={customStyle.headerCointer}>
      <Typography sx={customStyle.title} variant="h3">
        TODO LIST
      </Typography>
    </Box>
  );
}

export default MainPage;
