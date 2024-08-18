import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Stack,
  useTheme,
  Button,
  ButtonGroup,
} from "@mui/material";

const TypographyMui: React.FC = () => {
  const theme = useTheme();
  console.log("theme", theme);

  const [activeSection, setActiveSection] = useState<
    | "variant"
    | "fontSize"
    | "fontWeight"
    | "fontStyle"
    | "fontFamily"
    | "textTransform"
    | "textAlign"
    | null
  >(null);

  const handleSectionToggle = (
    section:
      | "variant"
      | "fontSize"
      | "fontWeight"
      | "fontStyle"
      | "fontFamily"
      | "textTransform"
      | "textAlign"
  ) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 3 }}>
        <ButtonGroup variant="contained" sx={{ marginBottom: 2 }}>
          <Button
            onClick={() => handleSectionToggle("variant")}
            variant={activeSection === "variant" ? "contained" : "outlined"}
          >
            Variant
          </Button>
          <Button
            onClick={() => handleSectionToggle("fontSize")}
            variant={activeSection === "fontSize" ? "contained" : "outlined"}
          >
            Font Size
          </Button>
          <Button
            onClick={() => handleSectionToggle("fontWeight")}
            variant={activeSection === "fontWeight" ? "contained" : "outlined"}
          >
            Font Weight
          </Button>
          <Button
            onClick={() => handleSectionToggle("fontStyle")}
            variant={activeSection === "fontStyle" ? "contained" : "outlined"}
          >
            Font Style
          </Button>
          <Button
            onClick={() => handleSectionToggle("fontFamily")}
            variant={activeSection === "fontFamily" ? "contained" : "outlined"}
          >
            Font Family
          </Button>
          <Button
            onClick={() => handleSectionToggle("textTransform")}
            variant={
              activeSection === "textTransform" ? "contained" : "outlined"
            }
          >
            Text Transform
          </Button>
          <Button
            onClick={() => handleSectionToggle("textAlign")}
            variant={activeSection === "textAlign" ? "contained" : "outlined"}
          >
            Text Align
          </Button>
        </ButtonGroup>

        {activeSection === "textAlign" && (
          <Stack gap={4}>
            <Stack direction={"row"} gap={8}>
              <Typography sx={{ textAlign: "left", border: 2 }}>
                <Typography sx={{ fontWeight: 900 }}>Left</Typography>So I
                started to walk into the water. I won't lie to you boys, I was
                terrified. But I pressed on, and as I made my way past the
                breakers a strange calm came over me.
              </Typography>

              <Typography sx={{ textAlign: "right", border: 2 }}>
                <Typography sx={{ fontWeight: 900 }}>Right</Typography>So I
                started to walk into the water. I won't lie to you boys, I was
                terrified. But I pressed on, and as I made my way past the
                breakers a strange calm came over me.
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={6}>
              <Typography sx={{ textAlign: "justify", border: 2 }}>
                <Typography sx={{ fontWeight: 900 }}>Justify </Typography>
                So I started to walk into the water. I won't lie to you boys, I
                was terrified. But I pressed on, and as I made my way past the
                breakers a strange calm came over me
              </Typography>

              <Typography sx={{ textAlign: "center", border: 2 }}>
                <Typography sx={{ fontWeight: 900 }}>Center</Typography>So I
                started to walk into the water. I won't lie to you boys, I was
                terrified. But I pressed on, and as I made my way past the
                breakers a strange calm came over me.
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={6}>
              <Typography sx={{ textAlign: "start", border: 2 }}>
                <Typography sx={{ fontWeight: 900 }}>Start</Typography>So I
                started to walk into the water. I won't lie to you boys, I was
                terrified. But I pressed on, and as I made my way past the
                breakers a strange calm came over me.
              </Typography>

              <Typography sx={{ textAlign: "end", border: 2 }}>
                <Typography sx={{ fontWeight: 900 }}>End</Typography>So I
                started to walk into the water. I won't lie to you boys, I was
                terrified. But I pressed on, and as I made my way past the
                breakers a strange calm came over me.
              </Typography>
            </Stack>
          </Stack>
        )}

        {activeSection === "textTransform" && (
          <>
            <Typography sx={{ textTransform: "uppercase" }}>
              uppercase text
            </Typography>
            <Typography sx={{ textTransform: "capitalize" }}>
              capitalized text
            </Typography>
            <Typography sx={{ textTransform: "lowercase" }}>
              lowercase text
            </Typography>
          </>
        )}

        {activeSection === "fontFamily" && (
          <>
            <Typography sx={{ fontFamily: "default", m: 1 }}>
              Default
            </Typography>
            <Typography
              sx={{ fontFamily: "Monospace", fontSize: "h6.fontSize", m: 1 }}
            >
              Monospace
            </Typography>
            <Typography sx={{ fontFamily: "cursive", m: 1 }}>
              Cursive
            </Typography>
            <Typography sx={{ fontFamily: "sans-serif", m: 1 }}>
              Sans Serif
            </Typography>
          </>
        )}

        {activeSection === "fontStyle" && (
          <>
            <Typography sx={{ fontStyle: "normal", m: 1 }}>
              Normal font style.
            </Typography>
            <Typography sx={{ fontStyle: "italic", m: 1 }}>
              Italic font Style.
            </Typography>
            <Typography sx={{ fontStyle: "oblique", m: 1 }}>
              Oblique font style.
            </Typography>
          </>
        )}

        {activeSection === "fontWeight" && (
          <>
            <Typography fontWeight={100}>Weight is 100</Typography>
            <Typography fontWeight={200}>Weight is 200</Typography>
            <Typography fontWeight={300}>Weight is 300</Typography>
            <Typography fontWeight={400}>Weight is 400</Typography>
            <Typography fontWeight={500}>Weight is 500</Typography>
            <Typography fontWeight={600}>Weight is 600</Typography>
            <Typography fontWeight={700}>Weight is 700</Typography>
            <Typography fontWeight={800}>Weight is 800</Typography>
            <Typography fontWeight={900}>Weight is 900</Typography>
          </>
        )}

        {activeSection === "fontSize" && (
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              <Typography fontSize={"3.75rem"}>Text 6xl</Typography>
              <Typography fontSize={"48px"}>Text 5xl</Typography>
              <Typography fontSize={"2.25em"}>Text 4xl</Typography>
              <Typography fontSize={"30px"}>Text 3xl</Typography>
              <Typography fontSize={"1.5rem"}>Text 2xl</Typography>
              <Typography fontSize={"20px"}>Text xl</Typography>
              <Typography fontSize={"1.125em"}>Text lg</Typography>
              <Typography fontSize={"1rem"}>Text base</Typography>
              <Typography fontSize={"14px"}>Text sm</Typography>
              <Typography fontSize={"12px"}>Text xs</Typography>
            </Box>
          </Box>
        )}

        {activeSection === "variant" && (
          <>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
              >
                <Typography variant="h1">h1. Heading</Typography>
                <Typography variant="h2">h2. Heading</Typography>
                <Typography variant="h3">h3. Heading</Typography>
                <Typography variant="h4">h4. Heading</Typography>
                <Typography variant="h5">h5. Heading</Typography>
                <Typography variant="h6">h6. Heading</Typography>
                <Typography variant="subtitle1">Subtitle1</Typography>
                <Typography variant="subtitle2">Subtitle2</Typography>
                <Typography variant="body1">Body1</Typography>
                <Typography variant="body2">Body2</Typography>
                <Typography variant="button" display="block">
                  Button text
                </Typography>
                <Typography variant="caption" display="block">
                  caption text
                </Typography>
                <Typography variant="overline" display="block">
                  Overline text
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default TypographyMui;
