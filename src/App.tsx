import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";

import React from "react";
import { useStyle } from "./StyleContext";
import Navigation from "./Navigation";
import { createTheme, ThemeProvider } from "@mui/material";

const drawerWidth = 270;

type Section =
  | "buttonVariant"
  | "buttonColor"
  | "colorScheme"
  | "typography"
  | "flexBox"
  | "iconography"
  | "imagery"
  | "interactability"
  | "button"
  | "responsiveness"
  | "shadow"
  | "input"
  | null;

const sections: { key: Section; label: string }[] = [
  { key: "button", label: "Button" },
  { key: "colorScheme", label: "Color Scheme" },
  { key: "typography", label: "Typography" },
  { key: "flexBox", label: "Flex Box" },
  { key: "iconography", label: "Iconography" },
  { key: "imagery", label: "Imagery" },
  { key: "shadow", label: "Shadow" },
  { key: "input", label: "Textfield" },
  { key: "responsiveness", label: "Responsiveness" },
];

const App = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [open, setOpen] = useState<true | false>(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const { style, toggleStyle } = useStyle();

  return (
    <Box display="flex">
      <AppBar
        position="fixed"
        sx={
          open
            ? (theme) => ({
                bgcolor: theme.palette.background.paper,
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(["margin", "width"], {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              })
            : (theme) => ({
                bgcolor: theme.palette.background.paper,
                transition: theme.transitions.create(["margin", "width"], {
                  easing: theme.transitions.easing.easeIn,
                  duration: theme.transitions.duration.leavingScreen,
                }),
              })
        }
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={open ? { mr: 2, display: "none" } : { mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box
          aria-label="drawer-header"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            ...theme.mixins.toolbar,
          })}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          ></Box>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          <ButtonGroup size="small">
            <Button
              variant={style === "material-ui" ? "contained" : "outlined"}
              onClick={() => toggleStyle("material-ui")}
            >
              Material UI
            </Button>
            <Button
              variant={style === "tailwind" ? "contained" : "outlined"}
              onClick={() => toggleStyle("tailwind")}
            >
              Tailwind CSS
            </Button>
          </ButtonGroup>
        </Box>
        <Divider />
        <List sx={{ maxHeight: "90vh", overflow: "auto" }}>
          {sections.map((section, index) => (
            <React.Fragment key={section.key}>
              <Divider />
              <ListItem>
                <ListItemButton
                  onClick={() => setActiveSection(section.key)}
                  selected={activeSection === section.key}
                >
                  <Typography>{section.label}</Typography>
                </ListItemButton>
              </ListItem>
              {index < sections.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box aria-label="main" width={"100%"}>
        <Box sx={(theme) => ({ ...theme.mixins.toolbar })} />
        <Box
          sx={
            open
              ? (theme) => ({
                  transition: theme.transitions.create("margin", {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
                  ml: 0,
                  padding: theme.spacing(3),
                })
              : (theme) => ({
                  transition: theme.transitions.create("margin", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                  }),
                  ml: `-${drawerWidth}px`,
                  padding: theme.spacing(3),
                })
          }
        >
          <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
