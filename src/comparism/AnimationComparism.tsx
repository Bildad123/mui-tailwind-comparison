import AnimationMui from "../material_ui/AnimationMui";
import { useStyle } from "../StyleContext";
import AnimationTailwind from "../tailwind_css/AnimationTailwind";

const AnimationComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <AnimationMui />}
      {style === "tailwind" && <AnimationTailwind />}
    </>
  );
};

export default AnimationComparism;
