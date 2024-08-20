import { Box, Button } from "@mui/material";
import AutorenewSharpIcon from "@mui/icons-material/AutorenewSharp";

const AnimationMui = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={5}
      height={"100%"}
    >
      <Button
        variant="contained"
        startIcon={
          <AutorenewSharpIcon
            sx={{
              animation: "spin 1s linear infinite",
              "@keyframes spin": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            }}
          />
        }
      >
        Spinning Animation
      </Button>

      <Button
        variant="contained"
        startIcon={
          <AutorenewSharpIcon
            sx={{
              animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
              "@keyframes ping": {
                "0%, 100%": { transform: "scale(1)", opacity: 1 },
                "75%": { transform: "scale(2)", opacity: 0 }, // Changed to ensure smooth transition
              },
              borderRadius: "9999px",
              bgcolor: "primary.main",
              width: "10px",
              height: "10px",
            }}
          />
        }
      >
        Ping Animation
      </Button>

      <Button
        variant="contained"
        startIcon={
          <Box
            sx={{
              position: "relative",
              width: "24px", // Keep the icon at a fixed size
              height: "24px",
            }}
          >
            <AutorenewSharpIcon
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "@keyframes pulse": {
                  "0%, 100%": { opacity: 1, transform: "scale(1)" },
                  "50%": { opacity: 0.5, transform: "scale(1.1)" }, // Slightly increase scale for pulse effect
                },
              }}
            />
          </Box>
        }
      >
        Pulse Animation
      </Button>

      <Button
        variant="contained"
        startIcon={
          <AutorenewSharpIcon
            sx={{
              animation: "bounce 1s infinite",
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(-10%)", // Adjusted to not go too far
                  animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                },
                "50%": {
                  transform: "translateY(0)",
                  animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                },
              },
            }}
          />
        }
      >
        Bounce Animation
      </Button>
    </Box>
  );
};

export default AnimationMui;
