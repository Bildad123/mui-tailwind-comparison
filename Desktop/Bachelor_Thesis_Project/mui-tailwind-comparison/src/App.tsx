import { Box, Grid, Paper } from "@mui/material";
import "./App.css";

import { StyleProvider } from "./StyleContext";
import Navbar, { Section } from "./Navbar";
import ColorSchemeComparism from "./comparism/ColorSchemeComparism";
import TypographyComparism from "./comparism/TypographyComparism";
import FlexBoxComparism from "./comparism/FlexBoxComparism";
import { useState } from "react";
import IconographyComparism from "./comparism/IconographyComparism";
import ImageryComparism from "./comparism/ImageryComparism";
import AllButtonStylesComparism from "./comparism/AllButtonStylesComparism";
import ResponsivenessComparism from "./comparism/ResponsivenessComparism";
import ShadowComparism from "./comparism/ShadowComparism";
import InputComparism from "./comparism/InputComparism";

function App() {
  const [activeSection, setActiveSection] = useState<Section>(null);

  return (
    <>
      <Box>
        <StyleProvider>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Paper sx={{ minHeight: "100vh", py: 4 }}>
                {activeSection === "button" && <AllButtonStylesComparism />}
                {activeSection === "colorScheme" && <ColorSchemeComparism />}
                {activeSection === "typography" && <TypographyComparism />}
                {activeSection === "flexBox" && <FlexBoxComparism />}
                {activeSection === "iconography" && <IconographyComparism />}
                {activeSection === "imagery" && <ImageryComparism />}
                {activeSection === "responsiveness" && (
                  <ResponsivenessComparism />
                )}
                {activeSection === "shadow" && <ShadowComparism />}
                {activeSection === "input" && <InputComparism />}
              </Paper>
            </Grid>
          </Grid>
        </StyleProvider>
      </Box>
    </>
  );
}

export default App;
