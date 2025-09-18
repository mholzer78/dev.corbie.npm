import Color from "./Color.js";
import Rgb from "./Rgb.js";

export default abstract class ColorNotRgb extends Color {
  master: Rgb;

  constructor(rgb) {
    super();
    this.master = rgb;
  }

  toHex(...items) {
    let value = items.flat();
    this.validate(value);
    return this.master.toHex(this.toRgb(value));
  }
  toHwb(...items) {
    let value = items.flat();
    this.validate(value);
    return this.master.toHwb(this.toRgb(value));
  }
  toHsv(...items) {
    let value = items.flat();
    this.validate(value);
    return this.master.toHsv(this.toRgb(value));
  }
  toHsl(...items) {
    let value = items.flat();
    this.validate(value);
    return this.master.toHsl(this.toRgb(value));
  }
  toCmyk(...items) {
    let value = items.flat();
    this.validate(value);
    return this.master.toCmyk(this.toRgb(value));
  }
}
