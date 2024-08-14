import AlertMui from "../material_ui/AlertMui";
import { useStyle } from "../StyleContext";
import AlertTailwind from "../tailwind_css/AlertTailwind";

const AlertComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <AlertMui />}
      {style === "tailwind" && <AlertTailwind />}
    </>
  );
};

export default AlertComparism;
