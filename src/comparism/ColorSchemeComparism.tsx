import ColorSchemeMui from "../material_ui/ColorSchemeMui";
import { useStyle } from "../StyleContext";
import ColorSchemeTailwind from "../tailwind_css/ColorSchemeTailwind";

const ColorSchemeComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <ColorSchemeMui />}
      {style === "tailwind" && <ColorSchemeTailwind />}
    </>
  );
};

export default ColorSchemeComparism;
