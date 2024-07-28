import FlexBoxMui from "../material_ui/FlexBoxMui";
import { useStyle } from "../StyleContext";
import FlexBoxTailwind from "../tailwind_css/FlexBoxTailwind";

const FlexBoxComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <FlexBoxMui />}
      {style === "tailwind" && <FlexBoxTailwind />}
    </>
  );
};

export default FlexBoxComparism;
