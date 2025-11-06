import Rgb from './modules/Rgb.js';
import Hex from './modules/Hex.js';
import Cmyk from './modules/Cmyk.js';
import Hwb from './modules/Hwb.js';
import Hsv from './modules/Hsv.js';
import Hsl from './modules/Hsl.js';

class CbColorConvert {
  rgb = new Rgb();
  hex = new Hex(this.rgb);
  hwb = new Hwb(this.rgb);
  hsv = new Hsv(this.rgb);
  hsl = new Hsl(this.rgb);
  cmyk = new Cmyk(this.rgb);
}

const cbColorConvert = new CbColorConvert();

export default cbColorConvert;
