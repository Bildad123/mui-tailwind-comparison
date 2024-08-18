import  { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Container } from "@mui/material";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  padding: "8px",
  marginBottom: "16px",
  backgroundColor: "#f0f0f0",
};

const itemStyle = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: "#1976d2",
  color: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "1rem",
  margin: "4px",
};

const FlexBoxMui = () => {
  const [activeSection, setActiveSection] = useState<
    | "flexDirection"
    | "flexWrap"
    | "justifyContent"
    | "alignItems"
    | "flexGrow"
    | "flexShrink"
    | null
  >(null);

  const handleSectionChange = (
    section:
      | "flexDirection"
      | "flexWrap"
      | "justifyContent"
      | "alignItems"
      | "flexGrow"
      | "flexShrink"
      | null
  ) => {
    setActiveSection(section);
  };

  return (
    <Container maxWidth="xl">
      {/* Updated ButtonGroup with variant "outlined" */}
      <ButtonGroup variant="contained" aria-label="flex direction demo buttons">
        <Button
          variant={activeSection === "flexDirection" ? "contained" : "text"}
          onClick={() => handleSectionChange("flexDirection")}
        >
          Flex Direction
        </Button>
        <Button
          variant={activeSection === "flexWrap" ? "contained" : "text"}
          onClick={() => handleSectionChange("flexWrap")}
        >
          Flex Wrap
        </Button>
        <Button
          variant={activeSection === "justifyContent" ? "contained" : "text"}
          onClick={() => handleSectionChange("justifyContent")}
        >
          Justify Content
        </Button>
        <Button
          variant={activeSection === "alignItems" ? "contained" : "text"}
          onClick={() => handleSectionChange("alignItems")}
        >
          Align Items
        </Button>
        <Button
          variant={activeSection === "flexGrow" ? "contained" : "text"}
          onClick={() => handleSectionChange("flexGrow")}
        >
          Flex Grow
        </Button>
        <Button
          variant={activeSection === "flexShrink" ? "contained" : "text"}
          onClick={() => handleSectionChange("flexShrink")}
        >
          Flex Shrink
        </Button>
      </ButtonGroup>

      {activeSection === "flexDirection" && (
        <Grid container spacing={3} my={2}>
          {/* Row with default 'row' flex direction */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} style={containerStyle}>
              <Box display="flex">
                <Box sx={itemStyle}>1</Box>
                <Box sx={itemStyle}>2</Box>
                <Box sx={itemStyle}>3</Box>
              </Box>
              <Typography variant="subtitle2">row</Typography>
            </Paper>
          </Grid>

          {/* Column with 'column' flex direction */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={3}
              style={{ ...containerStyle, flexDirection: "column" }}
            >
              <Box display="flex" flexDirection="column">
                <Box sx={itemStyle}>1</Box>
                <Box sx={itemStyle}>2</Box>
                <Box sx={itemStyle}>3</Box>
              </Box>
              <Typography variant="subtitle2">column</Typography>
            </Paper>
          </Grid>

          {/* Reverse row with 'row-reverse' flex direction */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={3}
              style={{ ...containerStyle, flexDirection: "row-reverse" }}
            >
              <Box display="flex" flexDirection="row-reverse">
                <Box sx={itemStyle}>1</Box>
                <Box sx={itemStyle}>2</Box>
                <Box sx={itemStyle}>3</Box>
              </Box>
              <Typography variant="subtitle2">row-reverse</Typography>
            </Paper>
          </Grid>

          {/* Reverse column with 'column-reverse' flex direction */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={3}
              style={{ ...containerStyle, flexDirection: "column-reverse" }}
            >
              <Box display="flex" flexDirection="column-reverse">
                <Box sx={itemStyle}>1</Box>
                <Box sx={itemStyle}>2</Box>
                <Box sx={itemStyle}>3</Box>
              </Box>
              <Typography variant="subtitle2">column-reverse</Typography>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Rest of the sections remain unchanged */}
      {activeSection === "flexWrap" && (
        <Grid container display={"flex"} justifyContent={"space-evenly"} py={3}>
          {/* Flex wrap example */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} style={containerStyle}>
              <Box display="flex" flexWrap="wrap">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <Box key={item} sx={{ ...itemStyle, flex: "0 0 auto" }}>
                    {item}
                  </Box>
                ))}
              </Box>
              <Typography variant="subtitle2">flex-wrap</Typography>
            </Paper>
          </Grid>

          {/* No flex wrap example */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} style={containerStyle}>
              <Box display="flex" flexWrap="nowrap">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <Box key={item} sx={{ ...itemStyle, flex: "0 0 auto" }}>
                    {item}
                  </Box>
                ))}
              </Box>
              <Typography variant="subtitle2">flex-nowrap</Typography>
            </Paper>
          </Grid>
        </Grid>
      )}

      {activeSection === "justifyContent" && (
        <Grid container spacing={3}>
          {/* flex-start */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              flex-start
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} sx={itemStyle}>
                  {item}
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* flex-end */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              flex-end
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} sx={itemStyle}>
                  {item}
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* center */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              center
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                justifyContent: "center",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} sx={itemStyle}>
                  {item}
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* space-between */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              space-between
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} sx={itemStyle}>
                  {item}
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* space-around */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              space-around
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} sx={itemStyle}>
                  {item}
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      )}

      {activeSection === "alignItems" && (
        <Grid container spacing={3}>
          {/* flex-start */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              flex-start
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                alignItems: "flex-start",
                width: "100%",
                height: "150px", // increased height
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} sx={itemStyle}>
                  {item}
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* flex-end */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              flex-end
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                alignItems: "flex-end",
                width: "100%",
                height: "150px", // increased height
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} sx={itemStyle}>
                  {item}
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* center */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              center
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                alignItems: "center",
                width: "100%",
                height: "150px", // increased height
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Box key={item} sx={itemStyle}>
                  {item}
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      )}

      {activeSection === "flexGrow" && (
        <Grid container spacing={3}>
          {/* flex-grow demonstration */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              flex-Grow
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                width: "100%",
              }}
            >
              <Box flexGrow={0} sx={{ ...itemStyle, borderRadius: "9999px" }}>
                1
              </Box>
              <Box flexGrow={1} sx={{ ...itemStyle, borderRadius: "9999px" }}>
                2
              </Box>
              <Box flexGrow={0} sx={{ ...itemStyle, borderRadius: "9999px" }}>
                3
              </Box>
            </Paper>
          </Grid>

          {/* No flex-Grow */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              No flex-Grow
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                width: "100%",
              }}
            >
              <Box sx={{ ...itemStyle }}>1</Box>
              <Box sx={{ ...itemStyle }}>2</Box>
              <Box sx={{ ...itemStyle }}>3</Box>
            </Paper>
          </Grid>
        </Grid>
      )}

      {activeSection === "flexShrink" && (
        <Grid container spacing={3}>
          {/* With flex-shrink */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              With flex-shrink
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                width: "100%",
              }}
            >
              {/* Box 1 with flexShrink: 1 (default) */}
              <Box
                sx={{
                  ...itemStyle,
                  width: "45%",
                  borderRadius: "9999px",
                  flexShrink: 0,
                }}
              >
                1
              </Box>
              {/* Box 2 with flexShrink: 2 */}
              <Box
                sx={{
                  ...itemStyle,
                  width: "45%",
                  borderRadius: "9999px",
                  flexShrink: 2,
                }}
              >
                2
              </Box>
              {/* Box 3 with flexShrink: 0 */}
              <Box
                sx={{
                  ...itemStyle,
                  width: "45%",
                  borderRadius: "9999px",
                  flexShrink: 0,
                }}
              >
                3
              </Box>
            </Paper>
          </Grid>

          {/* Without flex-shrink */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" align="center" mt={2}>
              Without flex-shrink
            </Typography>
            <Paper
              elevation={3}
              style={{
                ...containerStyle,
                width: "100%",
              }}
            >
              {/* Box 1 without flexShrink */}
              <Box sx={{ ...itemStyle, borderRadius: "9999px", width: "45%" }}>
                1
              </Box>
              {/* Box 2 without flexShrink */}
              <Box sx={{ ...itemStyle, borderRadius: "9999px", width: "45%" }}>
                2
              </Box>
              {/* Box 3 without flexShrink */}
              <Box sx={{ ...itemStyle, borderRadius: "9999px", width: "45%" }}>
                3
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default FlexBoxMui;
