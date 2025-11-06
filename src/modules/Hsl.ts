import type { AnyColorType, DefaultType } from './Color.js';
import ColorNotRgb from './ColorNotRgb.js';

export default class Hsl extends ColorNotRgb {
  override validArray = [360, 100, 100];

  toRgb(args: AnyColorType): DefaultType {
    const value = args as DefaultType;
    this.validate(value);
    const h = value[0];
    const s = value[1] / 100;
    const l = value[2] / 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      [r, g, b] = [c, x, 0];
    } else if (60 <= h && h < 120) {
      [r, g, b] = [x, c, 0];
    } else if (120 <= h && h < 180) {
      [r, g, b] = [0, c, x];
    } else if (180 <= h && h < 240) {
      [r, g, b] = [0, x, c];
    } else if (240 <= h && h < 300) {
      [r, g, b] = [x, 0, c];
    } else if (300 <= h && h < 360) {
      [r, g, b] = [c, 0, x];
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
  }
}
