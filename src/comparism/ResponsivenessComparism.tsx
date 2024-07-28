import ResponsivenessMui from "../material_ui/ResponsivenessMui";
import { useStyle } from "../StyleContext";
import ResponsivenessTailwind from "../tailwind_css/ResponsivenessTailwind";


const ResponsivenessComparism = () => {
    const { style } = useStyle();
    return (
      <>
        {style === "material-ui" && <ResponsivenessMui />}
        {style === "tailwind" && <ResponsivenessTailwind />}
      </>
    );
}

export default ResponsivenessComparism