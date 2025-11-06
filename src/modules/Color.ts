export type ColorType = string | number[];
export type DefaultType = [number, number, number];
export type HexType = string;
export type CmykType = [number, number, number, number];
export type AnyColorType = DefaultType | CmykType | HexType;

export default abstract class Color {
  validArray = [0, 0, 0];

  hex(args: AnyColorType): HexType {
    return this.toHex(args);
  }
  rgb(args: AnyColorType): DefaultType {
    return this.toRgb(args as AnyColorType);
  }
  hwb(args: AnyColorType): DefaultType {
    return this.toHwb(args);
  }
  hsv(args: AnyColorType): DefaultType {
    return this.toHsv(args);
  }
  hsl(args: AnyColorType): DefaultType {
    return this.toHsl(args);
  }
  cmyk(args: AnyColorType): CmykType {
    return this.toCmyk(args);
  }

  abstract toHex(args: AnyColorType): HexType;
  abstract toRgb(args: AnyColorType): DefaultType;
  abstract toHwb(args: AnyColorType): DefaultType;
  abstract toHsv(args: AnyColorType): DefaultType;
  abstract toHsl(args: AnyColorType): DefaultType;
  abstract toCmyk(args: AnyColorType): CmykType;

  validate = (value: AnyColorType) => {
    let err = 0;
    let errPosition = 0;
    let errRange = 0;
    if (typeof value == 'string') {
      value = value.toString();
      value = value.replace(/^#/, '');
      if (value.length !== 6) {
        err = 11;
      } else if (!value.match(/[0-9A-Fa-f]{6}/g)) {
        err = 12;
      }
    } else if (typeof value !== 'object') {
      err = 1;
    } else if (value.length !== this.validArray.length) {
      err = 1;
    } else {
      value.forEach((val, index) => {
        if (typeof val !== 'number') {
          err = 1;
        } else if (val < 0 || val > this.validArray[index]!) {
          err = 2;
          errPosition = index;
          errRange = this.validArray[index]!;
        }
      });
    }
    if (err == 1) {
      throw new Error(
        'Wrong input format. Should be an array with ' +
          this.validArray.length +
          ' args.',
      );
    } else if (err == 2) {
      throw new Error(
        'Wrong input format. Item [' +
          errPosition +
          '] must be between 0 and ' +
          errRange,
      );
    } else if (err == 11) {
      throw new Error("Wrong input format. Should be: '(#)abcdef'");
    } else if (err == 12) {
      throw new Error(
        'Wrong input format. Each item should be between 0 and F',
      );
    }
  };
}
