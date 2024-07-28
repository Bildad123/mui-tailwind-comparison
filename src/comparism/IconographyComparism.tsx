import IconographyMui from "../material_ui/IconographyMui";
import { useStyle } from "../StyleContext";
import IconographyTailwind from "../tailwind_css/IconographyTailwind";

const IconographyComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <IconographyMui />}
      {style === "tailwind" && <IconographyTailwind />}
    </>
  );
};

export default IconographyComparism;
