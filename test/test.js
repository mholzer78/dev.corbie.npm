import cbConvert from "../index.js";

Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array) return false;
  // if the argument is the same array, we can be sure the contents are same as well
  if (array === this) return true;
  // compare lengths - can save a lot of time
  if (this.length != array.length) return false;

  for (let i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });

let hex = "ffd801";
let rgb = [255,216,1];
let hwb = [51, 0, 0];
let hsv = [51, 100, 100];
let hsl = [51, 100, 50];
let cmyk = [0,15,100,0];

console.log("--- RGB ---");
console.log("2hex", cbConvert.rgb.hex(rgb) == hex);
console.log("2hwb", cbConvert.rgb.hwb(rgb).equals(hwb));
console.log("2hsv", cbConvert.rgb.hsv(rgb).equals(hsv));
console.log("2hsl", cbConvert.rgb.hsl(rgb).equals(hsl));
console.log("2cmy", cbConvert.rgb.cmyk(rgb).equals(cmyk));
console.log("--- HEX ---");
console.log("2rgb", cbConvert.hex.rgb(hex).equals(rgb));
console.log("2hwb", cbConvert.hex.hwb(hex).equals(hwb));
console.log("2hsv", cbConvert.hex.hsv(hex).equals(hsv));
console.log("2hsl", cbConvert.hex.hsl(hex).equals(hsl));
console.log("2cmy", cbConvert.hex.cmyk(hex).equals(cmyk));
console.log("--- HWB ---");
console.log("2hex", cbConvert.hwb.hex(hwb) == hex, cbConvert.hwb.hex(hwb));
console.log("2rgb", cbConvert.hwb.rgb(hwb).equals(rgb), cbConvert.hwb.rgb(hwb));
console.log("2hsv", cbConvert.hwb.hsv(hwb).equals(hsv));
console.log("2hsl", cbConvert.hwb.hsl(hwb).equals(hsl));
console.log("2cmy", cbConvert.hwb.cmyk(hwb).equals(cmyk));
console.log("--- HSV ---");
console.log("2hex", cbConvert.hsv.hex(hsv) == hex, cbConvert.hsv.hex(hsv));
console.log("2rgb", cbConvert.hsv.rgb(hsv).equals(rgb), cbConvert.hsv.rgb(hsv));
console.log("2hwb", cbConvert.hsv.hwb(hsv).equals(hwb));
console.log("2hsl", cbConvert.hsv.hsl(hsv).equals(hsl));
console.log("2cmy", cbConvert.hsv.cmyk(hsv).equals(cmyk));
console.log("--- HSL ---");
console.log("2hex", cbConvert.hsl.hex(hsl) == hex, cbConvert.hsl.hex(hsl));
console.log("2rgb", cbConvert.hsl.rgb(hsl).equals(rgb), cbConvert.hsl.rgb(hsl));
console.log("2hwb", cbConvert.hsl.hwb(hsl).equals(hwb));
console.log("2hsv", cbConvert.hsl.hsv(hsl).equals(hsv));
console.log("2cmy", cbConvert.hsl.cmyk(hsl).equals(cmyk));
console.log("--- CMYK ---");
console.log("2hex", cbConvert.cmyk.hex(cmyk) == hex, cbConvert.cmyk.hex(cmyk));
console.log("2rgb", cbConvert.cmyk.rgb(cmyk).equals(rgb), cbConvert.cmyk.rgb(cmyk));
console.log("2hwb", cbConvert.cmyk.hwb(cmyk).equals(hwb));
console.log("2hsv", cbConvert.cmyk.hsv(cmyk).equals(hsv));
console.log("2hsl", cbConvert.cmyk.hsl(cmyk).equals(hsl));