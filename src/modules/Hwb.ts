import type { AnyColorType, DefaultType } from './Color.js';
import ColorNotRgb from './ColorNotRgb.js';

export default class Hwb extends ColorNotRgb {
    override validArray = [360, 100, 100];

    toRgb(args: AnyColorType): DefaultType {
        const value = args.flat() as DefaultType;
        this.validate(value);
        let [hue, white, black] = value;
        var i,
            rgb,
            rgbArr: DefaultType = [0, 0, 0],
            tot;
        rgb = this.hslToRgb(hue, 1, 0.5);
        rgbArr[0] = rgb.r / 255;
        rgbArr[1] = rgb.g / 255;
        rgbArr[2] = rgb.b / 255;
        tot = white + black;
        if (tot > 1) {
            white = Number((white / tot).toFixed(2));
            black = Number((black / tot).toFixed(2));
        }
        for (i = 0; i < 3; i++) {
            rgbArr[i]! *= 1 - white - black;
            rgbArr[i]! += white;
            rgbArr[i] = Number(rgbArr[i]! * 255);
        }
        return rgbArr;
    }
    hslToRgb(hue: number, sat: number, light: number) {
        var t1, t2, r, g, b;
        hue = hue / 60;
        if (light <= 0.5) {
            t2 = light * (sat + 1);
        } else {
            t2 = light + sat - light * sat;
        }
        t1 = light * 2 - t2;
        r = this.hueToRgb(t1, t2, hue + 2) * 255;
        g = this.hueToRgb(t1, t2, hue) * 255;
        b = this.hueToRgb(t1, t2, hue - 2) * 255;
        return { r: r, g: g, b: b };
    }
    hueToRgb(t1: number, t2: number, hue: number) {
        if (hue < 0) hue += 6;
        if (hue >= 6) hue -= 6;
        if (hue < 1) return (t2 - t1) * hue + t1;
        else if (hue < 3) return t2;
        else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
        else return t1;
    }
}
