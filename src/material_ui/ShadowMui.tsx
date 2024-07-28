import { Box, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const ShadowMui = () => {
  return (
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
    </Box>
  );
};

export default ShadowMui;
