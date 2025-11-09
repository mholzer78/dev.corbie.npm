export type ColorType = string | number[];

export type TDefault = [number, number, number];
export type TString = string;
export type TCmyk = [number, number, number, number];
export type TRgbObj = { r: number; g: number; b: number };
export type THslObj = { h: number; s: number; l: number };
export type THsvObj = { h: number; s: number; v: number };
export type THwbObj = { h: number; w: number; b: number };
export type TCmykObj = { c: number; m: number; y: number; k: number };

type InputArgs =
  | TDefault
  | TCmyk
  | [TDefault]
  | [TString]
  | [TCmyk]
  | [TRgbObj]
  | [THslObj]
  | [THsvObj]
  | [THwbObj]
  | [TCmykObj];

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
  abstract toRgb(args: ColorType): TDefault;
  abstract toHwb(args: ColorType): TDefault;
  abstract toHsv(args: ColorType): TDefault;
  abstract toHsl(args: ColorType): TDefault;
  abstract toCmyk(args: ColorType): TCmyk;
  abstract toName(args: ColorType): string;

  validate = (value: TDefault | TCmyk) => {
    let err = 0;
    let errMsg = '';
    let errPosition = 0;
    let errRange = 0;
    if (typeof value !== 'object') {
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
