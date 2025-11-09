import type { TCmyk, TDefault } from './Color.js';
import ColorNotRgb from './ColorNotRgb.js';
import colorsJson from '../colors.json' with { type: 'json' };

export default class Name extends ColorNotRgb {
  override validate = (value: TDefault | TCmyk | string) => {
    const color = colorsJson.filter((e) => e.name == value);
    if (!color.length) {
      throw new Error('No name found that matches this value');
    }
  };

  toRgb(arg: string): TDefault {
    this.validate(arg);
    const color = colorsJson.filter((e) => e.name == arg);
    return color[0]!.rgb as TDefault;
  }
}
