
import { useStyle } from "../StyleContext";
import ButtonColorTailwind from "../tailwind_css/ButtonColorTailwind";
import ButtonColorMui from "../material_ui/ButtonColorMui";

const ButtonColorComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <ButtonColorMui />}
      {style === "tailwind" && <ButtonColorTailwind />}
    </>
  );
};

export default ButtonColorComparism;
