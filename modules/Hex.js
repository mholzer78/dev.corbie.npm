import { Color } from "./Color.js";

export { Hex };

class Hex extends Color {
  validate = (value) => {
    let err = 0;
    if (typeof value !== "string") {
      err = 1;
    } else {
      value = value.toString();
      value = value.replace(/^#/, "");
      if (value.length !== 6) {
        err = 1;
      } else if (!value.match(/[0-9A-Fa-f]{6}/g)) {
        err = 2;
      }
    }
    if (err == 1) {
      throw new Error("Wrong input format. Should be: '(#)abcdef'");
    } else if (err == 2) {
      throw new Error(
        "Wrong input format. Each item should be between 0 and F"
      );
    }
  };

  toRgb(hex) {
    this.validate(hex);
    hex = hex.replace(/^#/, "");
    let hexInt = parseInt(hex, 16);
    let r = (hexInt >> 16) & 255;
    let g = (hexInt >> 8) & 255;
    let b = hexInt & 255;
    return [r, g, b];
  }
}
