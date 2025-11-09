import Color, { type TDefault } from './Color.js';
import Rgb from './Rgb.js';

export default abstract class ColorNotRgb extends Color {
  master: Rgb;

  constructor(rgb: Rgb) {
    super();
    this.master = rgb;
  }

  toHex(args: TDefault) {
    this.validate(args);
    return this.master.toHex(this.toRgb(args));
  }
  toHwb(args: TDefault) {
    this.validate(args);
    return this.master.toHwb(this.toRgb(args));
  }
  toHsv(args: TDefault) {
    this.validate(args);
    return this.master.toHsv(this.toRgb(args));
  }
  toHsl(args: TDefault) {
    this.validate(args);
    return this.master.toHsl(this.toRgb(args));
  }
  toCmyk(args: TDefault) {
    this.validate(args);
    return this.master.toCmyk(this.toRgb(args));
  }
  toName(args: TDefault) {
    this.validate(args);
    return this.master.toName(this.toRgb(args));
  }
}
