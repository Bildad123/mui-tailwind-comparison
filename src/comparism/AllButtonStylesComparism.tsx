import AllButtonStylesMui from "../material_ui/AllButtonStylesMui";
import { useStyle } from "../StyleContext";
import AllButtonStylesTailwind from "../tailwind_css/AllButtonStylesTailwind";

const AllButtonStylesComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <AllButtonStylesMui />}
      {style === "tailwind" && <AllButtonStylesTailwind />}
    </>
  );
};

export default AllButtonStylesComparism;
