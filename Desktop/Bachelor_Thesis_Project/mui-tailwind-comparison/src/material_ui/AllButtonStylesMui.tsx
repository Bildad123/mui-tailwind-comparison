import { Button, ButtonGroup, Container } from "@mui/material";
import { useState } from "react";
import ButtonColorMui from "./ButtonColorMui";
import ButtonVariantMui from "./ButtonVariantMui";
import InteractabilityMui from "./InteractabilityMui";

const AllButtonStylesMui = () => {
  const [activeSection, setActiveSection] = useState<
    "ButtonColor" | "ButtonVariant" | "Interactability" | null
  >(null);

  const handleSectionChange = (
    section: "ButtonColor" | "ButtonVariant" | "Interactability" | null
  ) => {
    setActiveSection(section);
  };

  return (
    <Container maxWidth={"xl"}>
      <ButtonGroup
        variant="contained"
        aria-label="allButtonStyles demo buttons"
        sx={{my:3}}
      >
        <Button
          variant={activeSection === "ButtonColor" ? "contained" : "text"}
          onClick={() => handleSectionChange("ButtonColor")}
        >
          Button Color
        </Button>

        <Button
          variant={activeSection === "ButtonVariant" ? "contained" : "text"}
          onClick={() => handleSectionChange("ButtonVariant")}
        >
          Button Variant
        </Button>
        <Button
          variant={activeSection === "Interactability" ? "contained" : "text"}
          onClick={() => handleSectionChange("Interactability")}
        >
          Button Hover
        </Button>
      </ButtonGroup>

      {activeSection === "ButtonColor" && <ButtonColorMui />}
      {activeSection === "ButtonVariant" && <ButtonVariantMui />}
      {activeSection === "Interactability" && <InteractabilityMui />}
    </Container>
  );
};

export default AllButtonStylesMui;
