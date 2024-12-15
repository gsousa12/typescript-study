import { Box } from "@mui/material";
import PageHeader from "./components/pageHeader/PageHeader";
import AppHeader from "./components/appHeader/AppHeader";
import { customStyle } from "./app.style";
import AppContent from "./components/appContent/AppContent";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Box>
      <PageHeader />
      <Box sx={customStyle.wrapper}>
        <AppHeader />
        <AppContent />
      </Box>
      <Toaster />
    </Box>
  );
}

export default App;
