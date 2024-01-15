import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import { Box, Stack } from "@mui/material";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Box>
    <Navbar>Navbar</Navbar>
      <Stack direction={"row"} spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
