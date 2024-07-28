import InteractabilityMui from "../material_ui/InteractabilityMui";

import { useStyle } from "../StyleContext";
import InteractabiltyTailwind from "../tailwind_css/InteractabiltyTailwind";

const InteractabilityComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <InteractabilityMui />}
      {style === "tailwind" && <InteractabiltyTailwind />}
    </>
  );
};

export default InteractabilityComparism;
