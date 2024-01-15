import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  margin: "10px auto",
  width: "50%",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "20px",
  height: "10px",
}));
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>Icons
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
