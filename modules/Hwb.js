import { Color } from "./Color.js";

export { Hwb };

class Hwb extends Color {
  validate = (value) => {};

  toRgb(hwb) {
    this.validate(hwb);
    let [hue, white, black] = hwb;
    white /= 100;
    black /= 100;
    if (white + black >= 1) {
      let gray = white / (white + black);
      return [gray, gray, gray];
    }
    let rgb = this.hsl2rgb4hwb(hue, 100, 50);
    for (let i = 0; i < 3; i++) {
      rgb[i] *= 1 - white - black;
      rgb[i] += white;
    }
    let r = Math.round(rgb[0] * 255);
    let g = Math.round(rgb[1] * 255);
    let b = Math.round(rgb[2] * 255);
    return [r, g, b];
  }

  hsl2rgb4hwb = (hue, sat, light) => {
    sat /= 100;
    light /= 100;

    function f(n) {
      let k = (n + hue / 30) % 12;
      let a = sat * Math.min(light, 1 - light);
      return light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    }

    return [f(0), f(8), f(4)];
  };
}
