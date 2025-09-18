import ColorNotRgb from "./ColorNotRgb.js";

export default class Hsv extends ColorNotRgb{
  validArray = [360, 100, 100];

  toRgb(...items) {
    const value = items.flat();
    this.validate(value);
    let h = value[0] / 360;
    let s = value[1] / 100;
    let v = value[2] / 100;
    let r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        [r, g, b] = [v, t, p];
        break;
      case 1:
        [r, g, b] = [q, v, p];
        break;
      case 2:
        [r, g, b] = [p, v, t];
        break;
      case 3:
        [r, g, b] = [p, q, v];
        break;
      case 4:
        [r, g, b] = [t, p, v];
        break;
      case 5:
        [r, g, b] = [v, p, q];
        break;
      default:
        [r, g, b] = [0, 0, 0];
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
}
