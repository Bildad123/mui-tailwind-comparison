import TypographyMui from "../material_ui/TypographyMui";
import { useStyle } from "../StyleContext";
import TypographyTailwind from "../tailwind_css/TypographyTailwind";

const TypographyComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <TypographyMui />}
      {style === "tailwind" && <TypographyTailwind />}
    </>
  );
};

export default TypographyComparism;
