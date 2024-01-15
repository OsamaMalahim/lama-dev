import { Box, useMediaQuery } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      bgcolor={"lightskyblue"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;