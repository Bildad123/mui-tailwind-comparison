import ImageryMui from "../material_ui/ImageryMui";
import { useStyle } from "../StyleContext";
import ImageryTailwind from "../tailwind_css/ImageryTailwind";

const ImageryComparism = () => {
  const { style } = useStyle();
  return (
    <>
      {style === "material-ui" && <ImageryMui />}
      {style === "tailwind" && <ImageryTailwind />}
    </>
  );
};

export default ImageryComparism;
