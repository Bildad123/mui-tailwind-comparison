import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import ResponsiveTableMui from "./ResponsiveTableMui";
import { useState } from "react";
import MuiBreakpoints from "./MuiBreakpoints";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsivenessMui() {
  const [activeSection, setActiveSection] = useState<
    | "breakpointTable"
    | "responsiveBreakpointDemo"
    | "responsiveTableDemo"
    | null
  >(null);

  const handleSectionChange = (
    section:
      | "breakpointTable"
      | "responsiveBreakpointDemo"
      | "responsiveTableDemo"
      | null
  ) => {
    setActiveSection(section);
  };

  return (
    <Container maxWidth={"xl"}>
      <ButtonGroup
        variant="contained"
        aria-label="responsive filter buttons"
        sx={{ mb: 3 }}
      >
        <Button
          variant={activeSection === "breakpointTable" ? "contained" : "text"}
          onClick={() => handleSectionChange("breakpointTable")}
        >
          Breakpoint Table
        </Button>
        <Button
          variant={
            activeSection === "responsiveBreakpointDemo" ? "contained" : "text"
          }
          onClick={() => handleSectionChange("responsiveBreakpointDemo")}
        >
          Reponsive Breakpoint Demo
        </Button>
        <Button
          variant={
            activeSection === "responsiveTableDemo" ? "contained" : "text"
          }
          onClick={() => handleSectionChange("responsiveTableDemo")}
        >
          Responsive Table Demo
        </Button>
      </ButtonGroup>
      <Box sx={{ flexGrow: 1 }}>
        {activeSection === "responsiveBreakpointDemo" && (
          <>
            {" "}
            <Grid container spacing={2}>
              <Grid item lg={3} md={6} sm={9} xs={12}>
                <Item>
                  <Typography fontWeight={"bold"}>
                    lg=3 md=6 sm=9 xs=12
                  </Typography>
                </Item>
              </Grid>
              <Grid item lg={9} md={6} sm={3} xs={12}>
                <Item>
                  <Typography fontWeight={"bold"}>
                    lg=9 md=6 sm=3 xs=12
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </>
        )}
        {activeSection === "responsiveTableDemo" && <ResponsiveTableMui />}
        {activeSection === "breakpointTable" && <MuiBreakpoints />}
      </Box>
    </Container>
  );
}
