import { Alert, Button, ButtonGroup, Container, Stack } from "@mui/material";
import { useState } from "react";

const AlertMui = () => {
  const [activeSection, setActiveSection] = useState<
    | "DefaultAlert"
    | "Severity"
    | "Variants"
    | "BackgroundColor With sx prop"
    | null
  >(null);

  const handleSectionChange = (
    section:
      | "DefaultAlert"
      | "Severity"
      | "Variants"
      | "BackgroundColor With sx prop"
      | null
  ) => {
    setActiveSection(section);
  };

  return (
    <Container maxWidth={"xl"}>
      <ButtonGroup
        variant="contained"
        aria-label="alert demo buttons"
        sx={{ mb: 2 }}
      >
        <Button
          variant={activeSection === "DefaultAlert" ? "contained" : "text"}
          onClick={() => handleSectionChange("DefaultAlert")}
        >
          Default Alert
        </Button>
        <Button
          variant={activeSection === "Severity" ? "contained" : "text"}
          onClick={() => handleSectionChange("Severity")}
        >
          Severity
        </Button>
        <Button
          variant={activeSection === "Variants" ? "contained" : "text"}
          onClick={() => handleSectionChange("Variants")}
        >
          Variants
        </Button>
      </ButtonGroup>

      {activeSection === "DefaultAlert" && (
        <>
          <Alert>This is an alert component</Alert>
        </>
      )}

      {activeSection === "Severity" && (
        <Stack gap={2}>
          <Alert severity="success">This is a success Alert.</Alert>
          <Alert severity="info">This is an info Alert.</Alert>
          <Alert severity="warning">This is a warning Alert.</Alert>
          <Alert severity="error">This is an error Alert.</Alert>
        </Stack>
      )}

      {activeSection === "Variants" && (
        <Stack gap={6}>
          <Stack gap={2}>
            <Alert variant="filled" severity="success">
              This is a filled success Alert.
            </Alert>

            <Alert variant="outlined" severity="success">
              This is an outlined success Alert.
            </Alert>
          </Stack>
          <Stack gap={2}>
            <Alert variant="filled" severity="info">
              This is a filled info Alert.
            </Alert>
            <Alert variant="outlined" severity="info">
              This is an outlined info Alert.
            </Alert>
          </Stack>
          <Stack gap={2}>
            <Alert variant="filled" severity="warning">
              This is a filled warning Alert.
            </Alert>
            <Alert variant="outlined" severity="warning">
              This is an outlined warning Alert.
            </Alert>
          </Stack>
          <Stack gap={2}>
            <Stack gap={2}>
              <Alert variant="filled" severity="error">
                This is a filled error Alert.
              </Alert>

              <Alert variant="outlined" severity="error">
                This is an outlined error Alert.
              </Alert>
            </Stack>
          </Stack>
        </Stack>
      )}
      {activeSection === "BackgroundColor With sx prop" && (
        <Stack gap={2}>
          <Alert variant="filled" sx={{ backgroundColor: "primary.main" }}>
            This is an alert with primary color background
          </Alert>
          <Alert variant="filled" sx={{ backgroundColor: "secondary.main" }}>
            This is an alert with secondary color background
          </Alert>
          <Alert variant="filled" sx={{ backgroundColor: "info.main" }}>
            This is an alert with info color background
          </Alert>
          <Alert variant="filled" sx={{ backgroundColor: "warning.main" }}>
            This is an alert with warning color background
          </Alert>
          <Alert variant="filled" sx={{ backgroundColor: "error.main" }}>
            This is an alert with error color background
          </Alert>
        </Stack>
      )}
    </Container>
  );
};

export default AlertMui;
