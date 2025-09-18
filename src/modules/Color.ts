export type DefaultType = [number, number, number];
export type CmykType = [number, number, number, number];

export default abstract class Color {
  validArray = [0, 0, 0];

  hex(...items): string {
    return this.toHex(items.flat());
  }
  rgb(...items): DefaultType {
    return this.toRgb(items.flat());
  }
  hwb(...items): DefaultType {
    return this.toHwb(items.flat());
  }
  hsv(...items): DefaultType {
    return this.toHsv(items.flat());
  }
  hsl(...items): DefaultType {
    return this.toHsl(items.flat());
  }
  cmyk(...items): CmykType {
    return this.toCmyk(items.flat());
  }

  abstract toHex(items);
  abstract toRgb(items);
  abstract toHwb(items);
  abstract toHsv(items);
  abstract toHsl(items);
  abstract toCmyk(items);

  validate = (value) => {
    let err = 0;
    let errPosition = 0;
    let errRange = 0;
    if (typeof value !== "object") {
      err = 1;
    } else if (value.length !== this.validArray.length) {
      err = 1;
    } else {
      [...value].forEach((val, index) => {
        if (typeof val !== "number") {
          err = 1;
        } else if (val < 0 || val > this.validArray[index]) {
          err = 2;
          errPosition = index;
          errRange = this.validArray[index];
        }
      });
    }
    if (err == 1) {
      throw new Error(
        "Wrong input format. Should be an array with " +
          this.validArray.length +
          " items."
      );
    } else if (err == 2) {
      throw new Error(
        "Wrong input format. Item [" +
          errPosition +
          "] must be between 0 and " +
          errRange
      );
    }
  };
}
