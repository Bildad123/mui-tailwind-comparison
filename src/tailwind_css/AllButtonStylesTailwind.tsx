import { Button, ButtonGroup, Container } from "@mui/material";
import { useState } from "react";
import ButtonColorTailwind from "./ButtonColorTailwind";
import ButtonVariantTailwind from "./ButtonVariantTailwind";
import InteractabiltyTailwind from "./InteractabiltyTailwind";

const AllButtonStylesTailwind = () => {
  const [activeSection, setActiveSection] = useState<
    "ButtonColor" | "ButtonVariant" | "Interactability" | null
  >(null);

  const handleSectionChange = (
    section: "ButtonColor" | "ButtonVariant" | "Interactability" | null
  ) => {
    setActiveSection(section);;
  };

  return (
    <Container maxWidth={"xl"}>
      <ButtonGroup
        variant="contained"
        aria-label="allButtonStyles demo buttons"
        sx={{ mb: 3 }}
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

      {activeSection === "ButtonColor" && <ButtonColorTailwind />}
      {activeSection === "ButtonVariant" && <ButtonVariantTailwind />}
      {activeSection === "Interactability" && <InteractabiltyTailwind />}
    </Container>
  );
};

export default AllButtonStylesTailwind;
