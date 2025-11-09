import type { TCbCmyk, TCbDefault } from './Color.js';
import ColorNotRgb from './ColorNotRgb.js';

export default class Hex extends ColorNotRgb {
  override validate = (value: TCbDefault | TCbCmyk | string) => {
    let err = 0;
    let errMsg = '';
    value = value.toString();
    value = value.replace(/^#/, '');
    if (value.length !== 6) {
      throw new Error("Wrong input format. Should be: '(#)abcdef'");
    } else if (!value.match(/[0-9A-Fa-f]{6}/g)) {
      throw new Error(
        'Wrong input format. Each item should be between 0 and f',
      );
    }
  };
  toRgb(args: string): TCbDefault {
    this.validate(args);
    let value = args.toString();
    value = value.replace(/^#/, '');
    let hexInt = parseInt(value, 16);
    let r = (hexInt >> 16) & 255;
    let g = (hexInt >> 8) & 255;
    let b = hexInt & 255;
    return [r, g, b] as TCbDefault;
  }
}
