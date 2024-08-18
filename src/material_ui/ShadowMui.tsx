import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

const ShadowMui = () => {
  const [activeSection, setActiveSection] = useState<
    "paperWithElevation" | "boxShadowProperty" | null
  >(null);

  const handleSectionChange = (
    section: "paperWithElevation" | "boxShadowProperty" | null
  ) => {
    setActiveSection(section);
  };
  return (
    <Container maxWidth="xl">
      <ButtonGroup
        variant="contained"
        aria-label="allShadowStyles demo buttons"
        sx={{ mb: 3 }}
      >
        <Button
          variant={activeSection === "boxShadowProperty" ? "contained" : "text"}
          onClick={() => handleSectionChange("boxShadowProperty")}
        >
          Box Shadow Property
        </Button>

        <Button
          variant={
            activeSection === "paperWithElevation" ? "contained" : "text"
          }
          onClick={() => handleSectionChange("paperWithElevation")}
        >
          Paper With Elevation
        </Button>
      </ButtonGroup>
      {activeSection === "paperWithElevation" && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
          minHeight={"100vh"}
          width={"100%"}
          flexWrap={"wrap"}
        >
          <Box sx={{ textAlign: "center" }}>
            <Paper
              sx={{
                height: "18rem",
                width: "9rem",
                padding: "10px",
                bgcolor: grey[50],
              }}
            >
              {/* Content inside Paper */}
            </Paper>
            <Typography variant="subtitle1">Default</Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Paper
              elevation={3}
              sx={{
                height: "18rem",
                width: "9rem",
                padding: "10px",
                bgcolor: grey[50],
              }}
            >
              {/* Content inside Paper */}
            </Paper>
            <Typography variant="subtitle1">Elevation: 3</Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Paper
              elevation={6}
              sx={{
                height: "18rem",
                width: "9rem",
                padding: "10px",
                bgcolor: grey[50],
              }}
            >
              {/* Content inside Paper */}
            </Paper>
            <Typography variant="subtitle1">Elevation: 6</Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Paper
              elevation={9}
              sx={{
                height: "18rem",
                width: "9rem",
                padding: "10px",
                bgcolor: grey[50],
              }}
            >
              {/* Content inside Paper */}
            </Paper>
            <Typography variant="subtitle1">Elevation: 9</Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Paper
              elevation={12}
              sx={{
                height: "18rem",
                width: "9rem",
                padding: "10px",
                bgcolor: grey[50],
              }}
            >
              {/* Content inside Paper */}
            </Paper>
            <Typography variant="subtitle1">Elevation: 12</Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Paper
              elevation={15}
              sx={{
                height: "18rem",
                width: "9rem",
                padding: "10px",
                bgcolor: grey[50],
              }}
            >
              {/* Content inside Paper */}
            </Paper>
            <Typography variant="subtitle1">Elevation: 15</Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Paper
              elevation={15}
              sx={{
                height: "18rem",
                width: "9rem",
                padding: "10px",
                bgcolor: grey[50],
              }}
            >
              {/* Content inside Paper */}
            </Paper>
            <Typography variant="subtitle1">Elevation: 15</Typography>
          </Box>
        </Box>
      )}
      {activeSection === "boxShadowProperty" && (
        <>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={8}
            minHeight={"100vh"}
            width={"100%"}
            flexWrap={"wrap"}
          >
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  boxShadow: "0 0 #0000",
                  height: "18rem",
                  width: "9rem",
                  padding: "10px",
                  m: 1,
                  bgcolor: grey[50],
                }}
              ></Box>
              <Typography>shadow-none</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                  height: "18rem",
                  width: "9rem",
                  padding: "10px",
                  m: 1,
                  bgcolor: grey[50],
                }}
              ></Box>
              <Typography>shadow-md</Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                  height: "18rem",
                  width: "9rem",
                  padding: "10px",
                  m: 1,
                  bgcolor: grey[50],
                }}
              ></Box>
              <Typography>shadow-lg</Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  height: "18rem",
                  width: "9rem",
                  padding: "10px",
                  m: 1,
                  bgcolor: grey[50],
                }}
              ></Box>
              <Typography>shadow-xl</Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                  height: "18rem",
                  width: "9rem",
                  padding: "10px",
                  m: 1,
                  bgcolor: grey[50],
                }}
              ></Box>
              <Typography>shadow-2xl</Typography>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export default ShadowMui;
