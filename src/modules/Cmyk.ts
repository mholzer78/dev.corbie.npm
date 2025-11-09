import ColorNotRgb from './ColorNotRgb.js';
import type { TCmyk, TDefault } from './Color.js';

export default class Cmyk extends ColorNotRgb {
  override validArray = [100, 100, 100, 100];

  toRgb(args: TCmyk): TDefault {
    this.validate(args);
    let c = args[0] / 100;
    let m = args[1] / 100;
    let y = args[2] / 100;
    let k = args[3] / 100;

    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;

    let r = 1 - c;
    let g = 1 - m;
    let b = 1 - y;

    r = Math.round(255 * r);
    g = Math.round(255 * g);
    b = Math.round(255 * b);

    return [r, g, b] as TDefault;
  }
}
