import Color, { type TCbDefault } from './Color.js';
import Rgb from './Rgb.js';

export default abstract class ColorNotRgb extends Color {
  master: Rgb;

  constructor(rgb: Rgb) {
    super();
    this.master = rgb;
  }

  toHex(args: TCbDefault) {
    this.validate(args);
    return this.master.toHex(this.toRgb(args));
  }
  toHwb(args: TCbDefault) {
    this.validate(args);
    return this.master.toHwb(this.toRgb(args));
  }
  toHsv(args: TCbDefault) {
    this.validate(args);
    return this.master.toHsv(this.toRgb(args));
  }
  toHsl(args: TCbDefault) {
    this.validate(args);
    return this.master.toHsl(this.toRgb(args));
  }
  toCmyk(args: TCbDefault) {
    this.validate(args);
    return this.master.toCmyk(this.toRgb(args));
  }
  toName(args: TCbDefault) {
    this.validate(args);
    return this.master.toName(this.toRgb(args));
  }
}
