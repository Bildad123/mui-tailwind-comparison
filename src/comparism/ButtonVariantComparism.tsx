import ButtonVariantMui from "../material_ui/ButtonVariantMui";
import { useStyle } from "../StyleContext";
import ButtonVariantTailwind from "../tailwind_css/ButtonVariantTailwind";

const ButtonVariantComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <ButtonVariantMui />}
      {style === "tailwind" && <ButtonVariantTailwind />}
    </>
  );
};

export default ButtonVariantComparism;
