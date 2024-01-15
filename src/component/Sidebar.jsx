import { Box, Switch } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import  MarketPlace  from '@mui/icons-material/Storefront';
import Friends from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';


const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        {/* Home */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {/* Pages */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Pages">
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        {/* Groups */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Groups">
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        {/* Market Place */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#MarketPlace">
            <ListItemIcon>
              <MarketPlace />
            </ListItemIcon>
            <ListItemText primary="Market" />
          </ListItemButton>
        </ListItem>
        {/* Friends */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Friends">
            <ListItemIcon>
              <Friends />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        {/* Setting */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Setting">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        {/* Profile */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Profile">
            <ListItemIcon>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        {/* switch night mode */}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Profile">
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
           <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
