import { Box, Paper } from "@mui/material";
import "./App.css";

import ColorSchemeComparism from "./comparism/ColorSchemeComparism";
import TypographyComparism from "./comparism/TypographyComparism";
import FlexBoxComparism from "./comparism/FlexBoxComparism";
import IconographyComparism from "./comparism/IconographyComparism";
import ImageryComparism from "./comparism/ImageryComparism";
import AllButtonStylesComparism from "./comparism/AllButtonStylesComparism";
import ResponsivenessComparism from "./comparism/ResponsivenessComparism";
import ShadowComparism from "./comparism/ShadowComparism";
import InputComparism from "./comparism/InputComparism";
import LandingPage from "./comparism/LandingPage";
import AlertComparism from "./comparism/AlertComparism";

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
  | "alert"
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
    | "alert"
    | null;
  setActiveSection: (section: Section) => void;
}

function Navigation({ activeSection }: NavbarProps) {
  return (
    <>
      <Box width={"100%"}>
        <Paper
          sx={{ minHeight: "75vh", py: 4, width: "100%" }}
          elevation={activeSection === "responsiveness" ? 0 : 5}
        >
          {activeSection === "button" && <AllButtonStylesComparism />}
          {activeSection === "colorScheme" && <ColorSchemeComparism />}
          {activeSection === "typography" && <TypographyComparism />}
          {activeSection === "flexBox" && <FlexBoxComparism />}
          {activeSection === "iconography" && <IconographyComparism />}
          {activeSection === "imagery" && <ImageryComparism />}
          {activeSection === "responsiveness" && <ResponsivenessComparism />}
          {activeSection === "shadow" && <ShadowComparism />}
          {activeSection === "input" && <InputComparism />}
          {activeSection === "alert" && <AlertComparism />}
          {activeSection ? <></> : <LandingPage />}
        </Paper>
      </Box>
    </>
  );
}

export default Navigation;
