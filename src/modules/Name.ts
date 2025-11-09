import type { TCbCmyk, TCbDefault } from './Color.js';
import ColorNotRgb from './ColorNotRgb.js';
import colorsJson from '../colors.json' with { type: 'json' };

export default class Name extends ColorNotRgb {
  override validate = (value: TCbDefault | TCbCmyk | string) => {
    const color = colorsJson.find((e) => e.name == value);
    if (!color) {
      throw new Error('No name found that matches this value');
    }
  };

  toRgb(arg: string): TCbDefault {
    this.validate(arg);
    const color = colorsJson.find((e) => e.name == arg);
    return color!.rgb as TCbDefault;
  }
}
