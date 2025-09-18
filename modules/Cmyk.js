import ColorNotRgb from "./ColorNotRgb.js";

export default class Cmyk extends ColorNotRgb {
  validArray = [100, 100, 100, 100];

  toRgb(...items) {
    const value = items.flat();
    this.validate(value);
    let c = value[0] / 100;
    let m = value[1] / 100;
    let y = value[2] / 100;
    let k = value[3] / 100;

    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;

    let r = 1 - c;
    let g = 1 - m;
    let b = 1 - y;

    r = Math.round(255 * r);
    g = Math.round(255 * g);
    b = Math.round(255 * b);

    return [r, g, b];
  }
}
