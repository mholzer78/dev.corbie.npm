import { Color } from "./Color.js";

export { Cmyk };

class Cmyk extends Color {
  validate = (value) => {
    let err = 0;
    if (typeof value !== "object") {
      err = 1;
    } else if (value.length !== 4) {
      err = 1;
    } else {
      [...value].forEach((val) => {
        if (typeof val !== "number") {
          err = 1;
        } else if (val < 0 || val > 100) {
          err = 2;
        }
      });
    }
    if (err > 0) {
      if (err == 1) {
        throw new Error(
          "Wrong input format. Should be: [number,number,number,number]"
        );
      } else if (err == 2) {
        throw new Error(
          "Wrong input format. Each item should be between 0 and 100"
        );
      }
    }
  };
  toRgb = (cmyk, normalized = false) => {
    this.validate(cmyk);
    let c = cmyk[0] / 100;
    let m = cmyk[1] / 100;
    let y = cmyk[2] / 100;
    let k = cmyk[3] / 100;

    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;

    let r = 1 - c;
    let g = 1 - m;
    let b = 1 - y;

    if (!normalized) {
      r = Math.round(255 * r);
      g = Math.round(255 * g);
      b = Math.round(255 * b);
    }

    return [r, g, b];
  };
}
/*
const validate = (value) => {
  let err = 0;
  if (typeof value !== "object") {
    err = 1;
  } else if (value.length !== 4) {
    err = 1;
  } else {
    [...value].forEach((val) => {
      if (typeof val !== "number") {
        err = 1;
      } else if (val < 0 || val > 100) {
        err = 2;
      }
    });
  }
  if (err > 0) {
    if (err == 1) {
      throw new Error(
        "Wrong input format. Should be: [number,number,number,number]"
      );
    } else if (err == 2) {
      throw new Error(
        "Wrong input format. Each item should be between 0 and 100"
      );
    }
  }
};

const cmykToRgb = (cmyk, normalized = false) => {
  validate(cmyk);
  let c = cmyk[0] / 100;
  let m = cmyk[1] / 100;
  let y = cmyk[2] / 100;
  let k = cmyk[3] / 100;

  c = c * (1 - k) + k;
  m = m * (1 - k) + k;
  y = y * (1 - k) + k;

  let r = 1 - c;
  let g = 1 - m;
  let b = 1 - y;

  if (!normalized) {
    r = Math.round(255 * r);
    g = Math.round(255 * g);
    b = Math.round(255 * b);
  }

  return [r, g, b];
};
*/
