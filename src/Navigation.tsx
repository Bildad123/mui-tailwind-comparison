import { Box, Grid, Paper } from "@mui/material";
import "./App.css";

import { Section } from "./Navbar";
import ColorSchemeComparism from "./comparism/ColorSchemeComparism";
import TypographyComparism from "./comparism/TypographyComparism";
import FlexBoxComparism from "./comparism/FlexBoxComparism";
import IconographyComparism from "./comparism/IconographyComparism";
import ImageryComparism from "./comparism/ImageryComparism";
import AllButtonStylesComparism from "./comparism/AllButtonStylesComparism";
import ResponsivenessComparism from "./comparism/ResponsivenessComparism";
import ShadowComparism from "./comparism/ShadowComparism";
import InputComparism from "./comparism/InputComparism";

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

function Navigation({ activeSection }: NavbarProps) {
  return (
    <>
      <Box width={"100%"}>
        <Paper sx={{ minHeight: "100vh", py: 4, width: "100%" }}>
          {activeSection === "button" && <AllButtonStylesComparism />}
          {activeSection === "colorScheme" && <ColorSchemeComparism />}
          {activeSection === "typography" && <TypographyComparism />}
          {activeSection === "flexBox" && <FlexBoxComparism />}
          {activeSection === "iconography" && <IconographyComparism />}
          {activeSection === "imagery" && <ImageryComparism />}
          {activeSection === "responsiveness" && <ResponsivenessComparism />}
          {activeSection === "shadow" && <ShadowComparism />}
          {activeSection === "input" && <InputComparism />}
        </Paper>
      </Box>
    </>
  );
}

export default Navigation;
