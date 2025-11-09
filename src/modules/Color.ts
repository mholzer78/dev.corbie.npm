export type ColorType = string | number[];

export type TCbDefault = [number, number, number];
export type TCbString = string;
export type TCbCmyk = [number, number, number, number];
export type TCbRgbObj = { r: number; g: number; b: number };
export type TCbHslObj = { h: number; s: number; l: number };
export type TCbHsvObj = { h: number; s: number; v: number };
export type TCbHwbObj = { h: number; w: number; b: number };
export type TCbCmykObj = { c: number; m: number; y: number; k: number };

type InputArgs =
  | TCbDefault
  | TCbCmyk
  | [TCbDefault]
  | [TCbString]
  | [TCbCmyk]
  | [TCbRgbObj]
  | [TCbHslObj]
  | [TCbHsvObj]
  | [TCbHwbObj]
  | [TCbCmykObj];

export default abstract class Color {
  validArray = [0, 0, 0];

  normalizeArgs(args: InputArgs): number[] | string {
    if (typeof args[0] === 'string') {
      return args[0]; // a color keyword or hex
    }

    if (Array.isArray(args[0])) {
      // [x, y, z] or [x, y, z, w]
      return args[0];
    }

    if (typeof args[0] === 'object') {
      // { x, y, z, w? }
      return Object.values(args[0]);
    }

    // (x, y, z, [w])
    return args as number[];
  }

  withNormalizedArgs<T>(
    fn: (input: number[] | string) => T,
  ): (...args: InputArgs) => T {
    return (...args: InputArgs) => {
      const input = this.normalizeArgs(args);
      return fn(input);
    };
  }

  rgb = this.withNormalizedArgs(this.toRgb.bind(this));
  hex = this.withNormalizedArgs(this.toHex.bind(this));
  hwb = this.withNormalizedArgs(this.toHwb.bind(this));
  hsv = this.withNormalizedArgs(this.toHsv.bind(this));
  hsl = this.withNormalizedArgs(this.toHsl.bind(this));
  cmyk = this.withNormalizedArgs(this.toCmyk.bind(this));
  name = this.withNormalizedArgs(this.toName.bind(this));

  abstract toHex(args: ColorType): string;
  abstract toRgb(args: ColorType): TCbDefault;
  abstract toHwb(args: ColorType): TCbDefault;
  abstract toHsv(args: ColorType): TCbDefault;
  abstract toHsl(args: ColorType): TCbDefault;
  abstract toCmyk(args: ColorType): TCbCmyk;
  abstract toName(args: ColorType): string;

  validate = (value: TCbDefault | TCbCmyk) => {
    let err = 0;
    let errMsg = '';
    let errPosition = 0;
    let errRange = 0;
    if (typeof value !== 'object' || value.length !== this.validArray.length) {
      err = 1;
    }
    if (err == 0) {
      for (const [index, element] of value.entries()) {
        if (typeof element !== 'number') {
          err = 1;
        } else if (element < 0 || element > this.validArray[index]!) {
          err = 2;
          errPosition = index;
          errRange = this.validArray[index]!;
        }
      }
    }
    if (err == 1) {
      throw new Error(
        'Wrong input format. Should be an array with ' +
          this.validArray.length +
          ' numeric args.',
      );
    } else if (err == 2) {
      throw new Error(
        'Wrong input format. Item [' +
          errPosition +
          '] must be between 0 and ' +
          errRange,
      );
    }
  };
}
