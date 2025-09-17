import Color from "./Color.js";

export default class Rgb extends Color {
  validate = (value) => {
    let err = 0;
    if (typeof value !== "object") {
      err = 1;
    } else if (value.length !== 3) {
      err = 1;
    } else {
      [...value].forEach((val) => {
        if (typeof val !== "number") {
          err = 1;
        } else if (val < 0 || val > 255) {
          err = 2;
        }
      });
    }
    if (err == 1) {
      throw new Error("Wrong input format. Should be: [number,number,number]");
    } else if (err == 2) {
      throw new Error(
        "Wrong input format. Each item should be between 0 and 255"
      );
    }
  };

  toHex = (rgb) => {
    this.validate(rgb);
    return rgb.map((x) => x.toString(16).padStart(2, "0")).join("");
  };

  toCmyk = (rgb, normalized = false) => {
    this.validate(rgb);
    const [r, g, b] = this.splitRgb(rgb, 255);
    let c = 1 - r;
    let m = 1 - g;
    let y = 1 - b;
    let k = Math.min(c, Math.min(m, y));

    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);

    if (!normalized) {
      c = Math.round(c * 10000) / 100;
      m = Math.round(m * 10000) / 100;
      y = Math.round(y * 10000) / 100;
      k = Math.round(k * 10000) / 100;
    }

    c = isNaN(c) ? 0 : Math.round(c);
    m = isNaN(m) ? 0 : Math.round(m);
    y = isNaN(y) ? 0 : Math.round(y);
    k = isNaN(k) ? 0 : Math.round(k);

    return [c, m, y, k];
  };

  toHwb = (rgb) => {
    this.validate(rgb);
    const [r, g, b] = this.splitRgb(rgb, 255);
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);

    let hue = this.getHue(r, g, b);
    const white = Math.round(minC * 100);
    const black = Math.round((1 - maxC) * 100);

    return [hue, white, black];
  };

  toHsv = (rgb) => {
    this.validate(rgb);
    const [r, g, b] = this.splitRgb(rgb, 1);
    let max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      delta = max - min,
      sat = max === 0 ? 0 : delta / max,
      val = max / 255;

    let hue = this.getHue(r, g, b);

    return [
      hue,
      Math.round(sat * 100),
      Math.round(val * 100),
    ];
  };

  toHsl = (rgb) => {
    this.validate(rgb);
    const [r, g, b] = this.splitRgb(rgb, 255);

    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      sat = 0,
      light = 0;

    let hue = this.getHue(r, g, b);

    light = (cmax + cmin) / 2;

    sat = delta == 0 ? 0 : delta / (1 - Math.abs(2 * light - 1));

    sat = +(sat * 100).toFixed(1);
    light = +(light * 100).toFixed(1);

    return [hue, Math.round(sat), Math.round(light)];
  };

  splitRgb(rgb, divider = 1) {
    const [r, g, b] = rgb;
    return [r / divider, g / divider, b / divider];
  }

  getHue = (r, g, b) => {
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const delta = maxC - minC;
    let hue = 0;

    if (maxC === r) {
      hue = (60 * ((g - b) / delta)) % 360;
    } else if (maxC == g) {
      hue = 60 * ((b - r) / delta) + 120;
    } else if (maxC == b) {
      hue = 60 * ((r - g) / delta) + 240;
    }

    return Math.round(hue);
  };
}
