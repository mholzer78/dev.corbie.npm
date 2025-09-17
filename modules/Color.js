export default class Color {
  constructor(rgb) {
    this.master = rgb;
  }

  hex = (p1, p2, p3, p4) => this.toHex(p1, p2, p3, p4);
  rgb = (p1, p2, p3, p4) => this.toRgb(p1, p2, p3, p4);
  hwb = (p1, p2, p3, p4) => this.toHwb(p1, p2, p3, p4);
  hsv = (p1, p2, p3, p4) => this.toHsv(p1, p2, p3, p4);
  hsl = (p1, p2, p3, p4) => this.toHsl(p1, p2, p3, p4);
  cmyk = (p1, p2, p3, p4) => this.toCmyk(p1, p2, p3, p4);

  toHex(p1, p2, p3, p4) {
    let value = this.getParam(p1, p2, p3, p4);
    this.validate(value);
    return this.master.toHex(this.toRgb(value));
  }
  toHwb(p1, p2, p3, p4) {
    let value = this.getParam(p1, p2, p3, p4);
    this.validate(value);
    return this.master.toHwb(this.toRgb(value));
  }
  toHsv(p1, p2, p3, p4) {
    let value = this.getParam(p1, p2, p3, p4);
    this.validate(value);
    return this.master.toHsv(this.toRgb(value));
  }
  toHsl(p1, p2, p3, p4) {
    let value = this.getParam(p1, p2, p3, p4);
    this.validate(value);
    return this.master.toHsl(this.toRgb(value));
  }
  toCmyk(p1, p2, p3, p4) {
    let value = this.getParam(p1, p2, p3, p4);
    this.validate(value);
    return this.master.toCmyk(this.toRgb(value));
  }

  getParam(p1, p2, p3, p4) {
    if (p4 !== undefined) {
      return [p1, p2, p3, p4];
    } else if (p2 !== undefined && p3 !== undefined) {
      return [p1, p2, p3];
    } else {
      return p1;
    }
  }

  validate = (value) => {
    let err = 0;
    let errPosition = 0;
    let errRange = 0;
    if (typeof value !== "object") {
      err = 1;
    } else if (value.length !== this.validArray.length) {
      err = 1;
    } else {
      [...value].forEach((val, index) => {
        if (typeof val !== "number") {
          err = 1;
        } else if (val < 0 || val > this.validArray[index]) {
          err = 2;
          errPosition = index;
          errRange = this.validArray[index];
        }
      });
    }
    if (err == 1) {
      throw new Error(
        "Wrong input format. Should be an array with " +
          this.validArray.length +
          " items."
      );
    } else if (err == 2) {
      throw new Error(
        "Wrong input format. Item [" +
          errPosition +
          "] must be between 0 and " +
          errRange
      );
    }
  };
}
