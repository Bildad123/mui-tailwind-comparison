import React, { useState } from "react";
import * as Icons from "@mui/icons-material";
import { Grid, Typography, Box, Button, ButtonGroup, Container } from "@mui/material";

const IconographyMui = () => {
  const [activeSection, setActiveSection] = useState<
    | ""
    | "Outlined"
    | "Round"
    | "TwoTone"
    | "Sharp"
  >("");

  const handleSectionChange = (
    section: "" | "Outlined" | "Round" | "TwoTone" | "Sharp"
  ) => {
    setActiveSection(section);
  };

  const iconNames = Object.keys(Icons)
    .filter((name) => {
      if (!activeSection) return !name.match(/(Outlined|Round|TwoTone|Sharp)$/);
      return name.includes(activeSection);
    })
    .slice(0, 24);

  return (
    <Container maxWidth="xl">
      <ButtonGroup variant="contained" aria-label="icon filter buttons">
        <Button
          variant={activeSection === "" ? "contained" : "text"}
          onClick={() => handleSectionChange("")}
        >
          Default
        </Button>
        <Button
          variant={activeSection === "Outlined" ? "contained" : "text"}
          onClick={() => handleSectionChange("Outlined")}
        >
          Outlined
        </Button>
        <Button
          variant={activeSection === "Round" ? "contained" : "text"}
          onClick={() => handleSectionChange("Round")}
        >
          Round
        </Button>
        <Button
          variant={activeSection === "TwoTone" ? "contained" : "text"}
          onClick={() => handleSectionChange("TwoTone")}
        >
          TwoTone
        </Button>
        <Button
          variant={activeSection === "Sharp" ? "contained" : "text"}
          onClick={() => handleSectionChange("Sharp")}
        >
          Sharp
        </Button>
      </ButtonGroup>

      <Grid container spacing={1} sx={{ justifyContent: "flex-start", marginTop: 2 }}>
        {iconNames.map((iconName) => {
          const IconComponent = Icons[
            iconName as keyof typeof Icons
          ] as React.ElementType;
          return (
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              key={iconName}
              columnSpacing={5}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                m={2}
              >
                <IconComponent style={{ fontSize: 40 }} />
                <Typography variant="caption" align="center">
                  {iconName}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default IconographyMui;
