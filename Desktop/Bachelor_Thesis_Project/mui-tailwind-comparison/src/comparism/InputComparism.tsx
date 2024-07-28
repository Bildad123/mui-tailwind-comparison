import { InputMui } from "../material_ui/InputMui";
import { useStyle } from "../StyleContext";
import InputTailwind from "../tailwind_css/InputTailwind";

const InputComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <InputMui />}
      {style === "tailwind" && <InputTailwind />}
    </>
  );
};

export default InputComparism;
