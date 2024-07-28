import ShadowMui from "../material_ui/ShadowMui";
import { useStyle } from "../StyleContext";
import ShadowTailwind from "../tailwind_css/ShadowTailwind";

const ShadowComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <ShadowMui />}
      {style === "tailwind" && <ShadowTailwind />}
    </>
  );
};

export default ShadowComparism;
