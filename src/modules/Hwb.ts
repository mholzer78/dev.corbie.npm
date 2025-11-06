import type { AnyColorType, DefaultType } from './Color.js';
import ColorNotRgb from './ColorNotRgb.js';

export default class Hwb extends ColorNotRgb {
  override validArray = [360, 100, 100];

  toRgb(args: AnyColorType): DefaultType {
    const value = args as DefaultType;
    this.validate(value);
    let [hue, white, black] = value;
    white /= 100;
    black /= 100;

    // ensure w + b ≤ 1
    const ratio = white + black;
    if (ratio > 1) {
      white /= ratio;
      black /= ratio;
    }

    // temporary RGB from hue (HSV model with v = 1)
    const f = (n: number) => {
      const k = (n + hue / 60) % 6;
      return 1 - Math.max(0, Math.min(k, 4 - k, 1));
    };

    const rgb = [f(5), f(3), f(1)];

    // apply white and black mixing
    for (let i = 0; i < 3; i++) {
      rgb[i] = (rgb[i]! * (1 - white - black) + white) * 255;
    }

    return rgb.map((v) => Math.round(v)) as DefaultType;
  }
}
