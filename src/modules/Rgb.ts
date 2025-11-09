import Color from './Color.js';
import colorsJson from '../colors.json' with { type: 'json' };
import type { TDefault, TCmyk } from './Color.js';

export default class Rgb extends Color {
  override validArray = [255, 255, 255];

  toHex(args: TDefault): string {
    this.validate(args);
    return args.map((x) => x.toString(16).padStart(2, '0')).join('') as string;
  }

  toRgb(args: TDefault): TDefault {
    this.validate(args);
    return args as TDefault;
  }

  toHwb(args: TDefault): TDefault {
    this.validate(args);

    const [r, g, b] = this.splitRgb(args, 255);
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let chroma = max - min;
    let hue, white, black;
    if (chroma == 0) {
      hue = 0;
    } else if (r == max) {
      hue = (((g - b) / chroma) % 6) * 360;
    } else if (g == max) {
      hue = (((b - r) / chroma + 2) % 6) * 360;
    } else {
      hue = (((r - g) / chroma + 4) % 6) * 360;
    }
    white = min;
    black = 1 - max;
    return [
      Math.round(hue / 6),
      Math.round(white * 100),
      Math.round(black * 100),
    ] as TDefault;
  }

  toHsv(args: TDefault): TDefault {
    this.validate(args);

    // https://gist.github.com/mjackson/5311256
    const [r, g, b] = this.splitRgb(args, 255);

    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var hue,
      sat,
      val = max;

    var delta = max - min;
    sat = max == 0 ? 0 : delta / max;

    hue = 0; // achromatic
    if (max !== min) {
      switch (max) {
        case r:
          hue = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / delta + 2;
          break;
        case b:
          hue = (r - g) / delta + 4;
          break;
      }

      hue /= 6;
    }

    return [
      Math.round(hue * 360),
      Math.round(sat * 1000) / 10,
      Math.round(val * 1000) / 10,
    ] as TDefault;
  }

  toHsl(args: TDefault): TDefault {
    this.validate(args);

    // https://gist.github.com/mjackson/5311256
    const [r, g, b] = this.splitRgb(args, 255);
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let hue = 0;
    let sat;
    let light = (max + min) / 2;

    if (max == min) {
      hue = sat = 0; // achromatic
    } else {
      let delta = max - min;
      sat = light > 0.5 ? delta / (2 - max - min) : delta / (max + min);

      switch (max) {
        case r:
          hue = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / delta + 2;
          break;
        case b:
          hue = (r - g) / delta + 4;
          break;
      }

      hue /= 6;
    }

    return [
      Math.round(hue * 360),
      Math.round(sat * 1000) / 10,
      Math.round(light * 1000) / 10,
    ] as TDefault;
  }
  toCmyk(args: TDefault): TCmyk {
    this.validate(args);

    const [r, g, b] = this.splitRgb(args, 255);
    let c = 1 - r;
    let m = 1 - g;
    let y = 1 - b;
    let k = Math.min(c, Math.min(m, y));

    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);

    c = Math.round(c * 10000) / 100;
    m = Math.round(m * 10000) / 100;
    y = Math.round(y * 10000) / 100;
    k = Math.round(k * 10000) / 100;

    c = isNaN(c) ? 0 : Math.round(c);
    m = isNaN(m) ? 0 : Math.round(m);
    y = isNaN(y) ? 0 : Math.round(y);
    k = isNaN(k) ? 0 : Math.round(k);

    return [c, m, y, k] as TCmyk;
  }
  toName(args: TDefault): string {
    this.validate(args);

    const color = colorsJson.filter(
      (e) => JSON.stringify(e.rgb) === JSON.stringify(args),
    );

    if (!color.length) {
      return 'No name found that matches this value';
    } else {
      return color[0]!.name;
    }
  }

  splitRgb(rgb: TDefault, divider = 1): TDefault {
    const [r, g, b] = rgb;
    return [r / divider, g / divider, b / divider];
  }
}
