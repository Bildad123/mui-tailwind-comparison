import { Box, Button } from "@mui/material";
import {  blueGrey, amber } from "@mui/material/colors";

const InteractabilityMui = () => {
  return (
    <Box
      flexDirection={"column"}
      width={"sm"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
    >
      {" "}
      <Button
        sx={{
          backgroundColor: blueGrey[700],
          color: amber[50],
          transitionProperty: "background-color, color",
          transitionDuration: "1.3s",
          transitionTimingFunction: "ease",
          "&:hover": {
            backgroundColor: amber[500],
            color: blueGrey[900],
          },
        }}
      >
        Hoverable Button with Transition
      </Button>
    </Box>
  );
};

export default InteractabilityMui;
