export default class Color {
  constructor(rgb) {
    this.master = rgb;
  }
  rgb = (value) => this.toRgb(value);
  hex = (value) => this.toHex(value);
  hwb = (value) => this.toHwb(value);
  hsv = (value) => this.toHsv(value);
  hsl = (value) => this.toHsl(value);
  cmyk = (value) => this.toCmyk(value);
  
  toHex(value) {
    this.validate(value);
    return this.master.toHex(this.toRgb(value));
  }
  toHwb(value) {
    this.validate(value);
    return this.master.toHwb(this.toRgb(value));
  }
  toHsv(value) {
    this.validate(value);
    return this.master.toHsv(this.toRgb(value));
  }
  toHsl(value) {
    this.validate(value);
    return this.master.toHsl(this.toRgb(value));
  }
  toCmyk(value) {
    this.validate(value);
    return this.master.toCmyk(this.toRgb(value));
  }
}