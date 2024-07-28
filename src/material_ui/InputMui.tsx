import {
  Box,
  Button,
  ButtonGroup,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const InputMui = () => {

  const [activeSection, setActiveSection] = useState<
    "variant" | "startAdornment" | "endAdornment" | null
  >(null);

  const handleSectionChange = (
    section: "variant" | "startAdornment" | "endAdornment" | null
  ) => {
    setActiveSection(section);
  };

  return (
    <Container maxWidth={"xl"} >
      <ButtonGroup variant="contained" aria-label="input demo buttons" sx={{my:5}}>
        <Button
          variant={activeSection === "variant" ? "contained" : "text"}
          onClick={() => handleSectionChange("variant")}
        >
          Variant
        </Button>
        <Button
          variant={activeSection === "startAdornment" ? "contained" : "text"}
          onClick={() => handleSectionChange("startAdornment")}
        >
          Start Adornment
        </Button>
        <Button
          variant={activeSection === "endAdornment" ? "contained" : "text"}
          onClick={() => handleSectionChange("endAdornment")}
        >
          End Adornment
        </Button>
      </ButtonGroup>

      <Box
        flexDirection={"row"}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        width="100%"
        gap={3}
      >
        {activeSection === "variant" && (
          <Box width="28rem" gap={3} display={"flex"} flexDirection={"column"}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              size="small"
              fullWidth
            />
            <TextField
              id="filled-basic"
              label="Filled"
              variant="filled"
              size="small"
              fullWidth
            />
          </Box>
        )}
        {activeSection === "startAdornment" && (
          <Box width="28rem" gap={3} display={"flex"} flexDirection={"column"}>
            {" "}
            <TextField
              label="outlined TextField"
              id="outlined-start-adornment"
              size="small"
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="standard TextField"
              id="outlined-start-adornment"
              size="small"
              fullWidth
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="filled TextField"
              id="filled-start-adornment"
              size="small"
              fullWidth
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}

        {activeSection === "endAdornment" && (
          <Box width="28rem" gap={3} display={"flex"} flexDirection={"column"}>
            {" "}
            <TextField
              label="outlined TextField"
              id="outlined-end-adornment"
              size="small"
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="standard TextField"
              id="outlined-end-adornment"
              size="small"
              fullWidth
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="filled TextField"
              id="filled-end-adornment"
              size="small"
              fullWidth
              variant="filled"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};
