import type { AnyColorType, DefaultType, HexType } from './Color.js';
import ColorNotRgb from './ColorNotRgb.js';

export default class Hex extends ColorNotRgb {
  toRgb(args: AnyColorType): DefaultType {
    let value = args.toString();
    this.validate(value);
    value = value.replace(/^#/, '');
    let hexInt = parseInt(value, 16);
    let r = (hexInt >> 16) & 255;
    let g = (hexInt >> 8) & 255;
    let b = hexInt & 255;
    return [r, g, b];
  }
}
