import { Rgb } from "./modules/Rgb.js";
import { Hex } from "./modules/Hex.js";
import { Cmyk } from "./modules/Cmyk.js";
import { Hwb } from "./modules/Hwb.js";
import { Hsv } from "./modules/Hsv.js";
import { Hsl } from "./modules/Hsl.js";

export { cbConvert };

const cbConvert = {};

cbConvert.rgb = new Rgb();
cbConvert.hex = new Hex(cbConvert.rgb);
cbConvert.hwb = new Hwb(cbConvert.rgb);
cbConvert.hsv = new Hsv(cbConvert.rgb);
cbConvert.hsl = new Hsl(cbConvert.rgb);
cbConvert.cmyk = new Cmyk(cbConvert.rgb);
