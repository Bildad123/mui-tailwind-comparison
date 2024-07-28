import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";

import React from "react";
import { useStyle } from "./StyleContext";

export type Section =
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

interface NavbarProps {
  activeSection:
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
  setActiveSection: (section: Section) => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const sections: { key: Section; label: string }[] = [
    { key: "button", label: "Button" },
    { key: "colorScheme", label: "Color Scheme" },
    { key: "typography", label: "Typography" },
    { key: "flexBox", label: "Flex Box" },
    { key: "iconography", label: "Iconography" },
    { key: "imagery", label: "Imagery" },
    { key: "shadow", label: "Shadow" },
    { key: "input", label: "Textfield" },
  ];

  const { style, toggleStyle } = useStyle();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <ButtonGroup fullWidth>
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

      <Paper>
        <List>
          {sections.map((section, index) => (
            <React.Fragment key={section.key}>
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
      </Paper>
    </Box>
  );
}
