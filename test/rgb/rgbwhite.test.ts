import cbColorConvert from '../../src/index.js';
import { test, expect } from 'vitest';
import { DefaultType } from '../../src/modules/Color.js';
import colors from '../colors.js';

let master = colors.white;
/*
test('rgb2hex as params', () => {
  expect(cbColorConvert.rgb.hex(0, 0, 0)).toBe('000000');
});
*/
test('rgb2hex', () => {
  expect(cbColorConvert.rgb.hex(master.rgb as DefaultType)).toBe(master.hex);
});
test('rgb2rgb', () => {
  expect(cbColorConvert.rgb.rgb(master.rgb as DefaultType)).toStrictEqual(
    master.rgb,
  );
});
test('rgb2hwb', () => {
  expect(cbColorConvert.rgb.hwb(master.rgb as DefaultType)).toStrictEqual(
    master.hwb,
  );
});
test('rgb2hsv', () => {
  expect(cbColorConvert.rgb.hsv(master.rgb as DefaultType)).toStrictEqual(
    master.hsv,
  );
});
test('rgb2hsl', () => {
  expect(cbColorConvert.rgb.hsl(master.rgb as DefaultType)).toStrictEqual(
    master.hsl,
  );
});
test('rgb2cmyk', () => {
  expect(cbColorConvert.rgb.cmyk(master.rgb as DefaultType)).toStrictEqual(
    master.cmyk,
  );
});
