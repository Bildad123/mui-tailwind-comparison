import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { Box, Button, ButtonGroup, Container } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useState } from "react";

const imageUrl = "https://images.unsplash.com/photo-1549388604-817d15aa0110";

const borderRadiusClasses = [
  { className: "rounded-none", borderRadius: "0px" },
  { className: "rounded-sm", borderRadius: "0.125rem" },
  { className: "rounded", borderRadius: "0.25rem" },
  { className: "rounded-md", borderRadius: "0.375rem" },
  { className: "rounded-lg", borderRadius: "0.5rem" },  
  { className: "rounded-xl", borderRadius: "0.75rem" },
  { className: "rounded-2xl", borderRadius: "1rem" },
  { className: "rounded-3xl", borderRadius: "1.5rem" },
  { className: "rounded-full", borderRadius: "9999px" },
];

export default function ImageryMui() {

  const [activeSection, setActiveSection] = useState<
  | "resizingAndCropping"
  | "profileImage"
  | null
>(null);

const handleSectionChange = (
  section:
  | "resizingAndCropping"
  | "profileImage"
  | null
) => {
  setActiveSection(section);
};
  return (
    <Container maxWidth="xl">
       <ButtonGroup variant="contained" aria-label="imagery demo buttons"sx={{mb:3}} >
        <Button
          variant={activeSection === "profileImage" ? "contained" : "text"}
          onClick={() => handleSectionChange("profileImage")}
        >
          Profile Image
        </Button>
        <Button
          variant={activeSection === "resizingAndCropping" ? "contained" : "text"}
          onClick={() => handleSectionChange("resizingAndCropping")}
        >
          Resizing and Cropping
        </Button>
      
      </ButtonGroup>
      {activeSection === "resizingAndCropping" && (
        <>
          <Grid container spacing={2} style={{ flexGrow: 1 }}>
            {/* object-contain */}
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper
                  style={{
                    width: 300,
                    height: 300,
                    overflow: "hidden",
                    padding: 8,
                    backgroundColor: grey[100],
                  }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Paper>
                <Typography variant="subtitle2" align="center">
                  objectFit : contain
                </Typography>
              </div>
            </Grid>

            {/* object-cover */}
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper
                  style={{
                    width: 300,
                    height: 300,
                    overflow: "hidden",
                    padding: 8,
                    backgroundColor: grey[100],
                  }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
                <Typography variant="subtitle2" align="center">
                  objectFit:cover
                </Typography>
              </div>
            </Grid>

            {/* object-fill */}
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper
                  style={{
                    width: 300,
                    height: 300,
                    overflow: "hidden",
                    padding: 8,
                    backgroundColor: grey[100],
                  }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  />
                </Paper>
                <Typography variant="subtitle2" align="center">
                  objectFit:fill
                </Typography>
              </div>
            </Grid>

            {/* object-none */}
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper
                  style={{
                    width: 300,
                    height: 300,
                    overflow: "hidden",
                    padding: 8,
                    backgroundColor: grey[100],
                  }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    style={{ width: "100%", height: "100%", objectFit: "none" }}
                  />
                </Paper>
                <Typography variant="subtitle2" align="center">
                  objectFit:none
                </Typography>
              </div>
            </Grid>

            {/* object-scale-down */}
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Paper
                  style={{
                    width: 300,
                    height: 300,
                    overflow: "hidden",
                    padding: 8,
                    backgroundColor: grey[100],
                  }}
                >
                  <img
                    src={`${imageUrl}?w=300&fit=crop&auto=format`}
                    alt="Sample"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "scale-down",
                    }}
                  />
                </Paper>
                <Typography variant="subtitle2" align="center">
                  objectFit:scale-down
                </Typography>
              </div>
            </Grid>
          </Grid>
        </>
      )}
      {activeSection === "profileImage" && (
        <Grid container spacing={2} justifyContent="center">
          {borderRadiusClasses.map((item) => (
            <Grid item key={item.className}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                mx={2.5}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={64}
                  width={64}
                  bgcolor={grey[400]}
                  mb={2}
                  style={{ borderRadius: item.borderRadius }}
                >
                  <Person2OutlinedIcon sx={{ fontSize: 30 }} />
                </Box>
                <Typography variant="body2">
                  {"br : " + item.borderRadius}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
